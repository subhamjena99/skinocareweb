import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    // CHECKING AUTH TOKEN FROM COOKIES
    const token = request.cookies.get('skinocare-auth')?.value;

    // CONDITIONAL REDIRECTION
    if (token !== 'undefined' && token !== undefined) {
        
        if (request.nextUrl.pathname.startsWith('/signin') || request.nextUrl.pathname.startsWith('/signup')) {
            return NextResponse.redirect(new URL('/', request.url));
        };
        
        if (request.nextUrl.pathname.startsWith('/checkout')) {
            // CHECKOUT PRODUCTS LISTING API
            const productsList = await postData(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/user/billing`, { checkoutType: "cart", shippingMethod: 'free_shipping', }, token);
            // GETTING PRODUCTS LIST COUNT
            let products = productsList?.data?.products?.length;
        
                if (!products) {
                    return NextResponse.redirect(new URL('/', request.url));
                };
        };

        return NextResponse.next();

    } else {

        if (request.nextUrl.pathname.startsWith('/signin') || request.nextUrl.pathname.startsWith('/signup')) {
            return NextResponse.next();
        };
        return NextResponse.redirect(new URL('/', request.url));
    }
};

// Matching Paths
export const config = {
    matcher: ['/signin', '/signup', '/account', '/checkout'],
};


// POST METHOD API CALL USING FETCH
async function postData(url = "", data = {}, token = '') {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            'Authorization': `${token}`,
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
};