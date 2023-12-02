import React, { useContext, useEffect, useState } from 'react'
import Cart from '../Cart';
import Link from 'next/link';
import useCookie from '@/hooks/cookie';
import { getRequest, postRequest } from '@/helpers';
import { useDebounce } from '@/hooks/useDebounce';
import { CartContext } from '@/Context/CartContext';
import { useRouter } from 'next/navigation';
import Wishlist from '../Wishlist';

function Sidebar({ sidebar, closeback, path, userDetails }) {

    // USING NAVIGATION HOOK
    const router = useRouter();
    // USING CUSTOM COOKIE HOOK
    const [setCookie, getCookie] = useCookie();
    // GETTING TOKEN VALUE FROM COOKIE
    const authToken = getCookie('skinocare-auth');
    const token = (authToken !== undefined && authToken !== "undefined") ? true : false;

    // ACCESSING CONTEXT API FOR CART
    const [data, setData] = useContext(CartContext);

    // CART DATA STATE
    const [cartData, setCartData] = useState([]);
    // WISHLIST DATA STATE
    const [wishlistData, setWishlistData] = useState([]);
    // CART TOGGLE STATE
    const [cartToggler, setCartToggler] = useState(false);
    // WISHLIST TOGGLE STATE
    const [wishlistToggler, setWishlistToggler] = useState(false);
    // SEARCH TEXT STATE
    const [searchText, setSearchText] = useState('');
    // SUGGESTION SEARCH LIST STATE
    const [suggestionSearchList, setSuggestionSearchList] = useState([]);
    // RECENT SEARCH LIST STATE
    const [recentSearchList, recentSetSearchList] = useState([]);

    // DEBOUNCING SEARCH TEXT USING CUSTOM DEBOUNCE HOOK
    const search = useDebounce(searchText);

    useEffect(() => {
        getRequest({ url: 'api/user/product/recent/search', token: authToken })
            .then(res => {
                if (res?.data?.status) {
                    recentSetSearchList(res?.data?.data);
                };
            })
            .catch(err => {
                // if(err?.data?.msg){
                //     console.log(err?.data?.msg);
                // }else{
                //     console.log(err?.response?.data?.errors);
                // };
            });
        postRequest({ url: 'api/web/product/suggestion', cred: { value: search }, token: authToken })
            .then(res => {
                if (res?.data?.status) {
                    setSuggestionSearchList(res?.data?.data);
                };
            })
            .catch(err => {
                // if(err?.data?.msg){
                //     console.log(err?.data?.msg);
                // }else{
                //     console.log(err?.response?.data?.errors);
                // };
            });
        if (authToken !== undefined && authToken !== "undefined") {
            getRequest({ url: `api/user/cart`, token: authToken })
                .then(res => {
                    if (res?.data?.status) {
                        setCartData(res?.data?.data);
                        setData(res?.data?.data?.length);
                    }
                })
                .catch(err => {
                    // if(err?.data?.msg){
                    //     console.log(err?.data?.msg);
                    // }else{
                    //     console.log(err?.response?.data?.errors);
                    // };
                });
        }
    }, [search, data, cartData?.length]);

    // HANDLING SEARCH TEXT
    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchText(value);
    };

    // HANDLING CART TOGGLE
    const cartCloseBtn = () => {
        setCartToggler(false);
    };
    // HANDLING WISHLIST TOGGLE
    const wishlistCloseBtn = () => {
        setWishlistToggler(false);
    };

    // SEARCH PRODUCTS LIST API CALL
    const searchProdutsList = (e) => {
        router.push(`/shop?search=${searchText}`);
        closeback();
    };

    // LOPGOUT API CALL
    const logout = () => {
        deleteCookie();
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}`;
    };

    return (
        <>
            {/* CART COMPONENT */}
            {cartToggler ? <Cart close={cartCloseBtn} data={cartData} /> : ""}
            {/* WISHLIST COMPONENT */}
            {wishlistToggler ? <Wishlist close={wishlistCloseBtn} data={wishlistData} /> : ""}

            <div className={sidebar ? "sidebar" : "closesidebar"}>

                <div className="sidebarlinks">
                    <div onClick={closeback} className="sidebarclosebutton">
                        <i className="fa-solid fa-xmark ilogo "></i>
                    </div>

                    <div className="sidebarcardlink search-container">
                        <div className="navsearchbox">
                            <svg xmlns="http://www.w3.org/2000/svg" className='ms-3' width="18" height="19" viewBox="0 0 18 19" fill="none" onClick={searchProdutsList}>
                                <circle cx="8.30541" cy="8.80492" r="7.49047" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.5151 14.4043L16.4518 17.3334" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input type="text" onChange={handleSearch} value={searchText} className='search-input' placeholder='Search for Product' />
                        </div>

                        {(authToken !== undefined && authToken !== "undefined") ?
                            <div className='search-content'>
                                <div className="search-action">

                                    {
                                        searchText ?
                                            <p className='m-0'>SUGGESTIONS</p>
                                            :
                                            <p className='m-0'>RECENT SEARCH</p>

                                    }
                                    <span className='a'><strong>Clear</strong> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M7.75832 6.09246C7.68107 6.16955 7.61978 6.26113 7.57796 6.36194C7.53614 6.46275 7.51462 6.57082 7.51462 6.67996C7.51462 6.7891 7.53614 6.89717 7.57796 6.99798C7.61978 7.09879 7.68107 7.19036 7.75832 7.26746L10.9917 10.5008L7.75832 13.7341C7.60251 13.8899 7.51497 14.1013 7.51497 14.3216C7.51497 14.542 7.60251 14.7533 7.75832 14.9091C7.91414 15.0649 8.12547 15.1525 8.34582 15.1525C8.56618 15.1525 8.77751 15.0649 8.93332 14.9091L12.7583 11.0841C12.8356 11.007 12.8969 10.9155 12.9387 10.8146C12.9805 10.7138 13.002 10.6058 13.002 10.4966C13.002 10.3875 12.9805 10.2794 12.9387 10.1786C12.8969 10.0778 12.8356 9.98622 12.7583 9.90912L8.93332 6.08412C8.61665 5.76746 8.08332 5.76746 7.75832 6.09246Z" fill="#53403A" />
                                    </svg></span>
                                </div>
                                <div className="search-result">
                                    {
                                        searchText ?
                                            suggestionSearchList?.map((elem, index) => <Link href={elem?.slug ? '/shop/' + elem?.slug : '#!'} key={index + 1} onClick={closeback}><p>{elem?.name}</p></Link>)
                                            :
                                            recentSearchList?.map((elem, index) => <Link href={elem?.slug ? '/shop/' + elem?.slug : '#!'} key={index + 1} onClick={closeback}><p>{elem?.name}</p></Link>)

                                    }
                                </div>
                            </div>
                            :
                            <div className='search-content'>
                                <div className="search-action">
                                    <p className='m-0'>SUGGESTIONS</p>
                                </div>
                                <div className="search-result">
                                    {
                                        suggestionSearchList?.map((elem, index) => <Link href={elem?.slug ? '/shop/' + elem?.slug : '#!'} key={index + 1} onClick={closeback}><p>{elem?.name}</p></Link>)
                                    }
                                </div>
                            </div>
                        }

                    </div>

                    <ul className='p-0'>
                        <li className={path == "/" ? "active" : ""}>
                            <Link href='/' onClick={closeback}>Home </Link>
                        </li>
                        <li className={path == "/about-us" ? "active" : ""}>
                            <Link href='/about-us' onClick={closeback}>About us </Link>
                        </li>
                        <li className={path == "/experties" ? "active" : ""}>
                            <Link href="/experties" onClick={closeback}>Our Expertise  </Link>
                        </li>
                        <li className={path == "/testimonials" ? "active" : ""}>
                            <Link href="/testimonials" onClick={closeback}>Testimonials   </Link>
                        </li>
                        <li className={path == "/skin-&-hair" ? "active" : ""}>
                            <Link href="/skin-&-hair" onClick={closeback}>Skin & Hair</Link>
                        </li>
                        <li className={path == "/shop" ? "active" : ""}>
                            <Link href="/shop" onClick={closeback}> Shop</Link>
                        </li>
                    </ul>


                </div>

                <div className="sidebarcardlink">
                    <div className='d-flex'>
                        <span className="cardbutton1 d-block">
                            <span className="navlinbox a cart-icon-container" onClick={() => {
                                setCartToggler(true);
                                closeback();
                            }} title='Cart'>

                                <div className="cart-count">
                                    {data}
                                </div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_422_2842)">
                                        <path d="M5.34191 18.6833L2.6183 13.2361C0.956047 9.91156 3.37353 6 7.09044 6H16.9101C20.627 6 23.0445 9.91156 21.3822 13.2361L18.6586 18.6833C17.6423 20.716 15.5647 22 13.2921 22H10.7085C8.43584 22 6.35826 20.716 5.34191 18.6833Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M14 2L17 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M10 2L7 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M10 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M14 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_422_2842">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </span>

                        <span className="cardbutton1 d-block">
                            <span className="navlinbox a" onClick={() => {
                                setWishlistToggler(true);
                                closeback();
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.24984 3.33399C3.71859 3.33399 1.6665 5.38607 1.6665 7.91732C1.6665 12.5007 7.08317 16.6673 9.99984 17.6365C12.9165 16.6673 18.3332 12.5007 18.3332 7.91732C18.3332 5.38607 16.2811 3.33399 13.7498 3.33399C12.1998 3.33399 10.829 4.10357 9.99984 5.28149C9.5772 4.67949 9.01574 4.18819 8.36298 3.84919C7.71021 3.51019 6.98538 3.33347 6.24984 3.33399Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </span>
                    </div>

                    {token && <div className="profilesec d-block">
                        <div className="accordion accordianbut" id='accordianbut1' >
                            <div className="accordion">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle d-flex align-items-center justify-content-center" type="button" id='accordianbutton12' data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="navprofileimgbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M6.34961 19.5C7.6538 17.9502 9.60088 17 11.7195 17H12.2792C14.3978 17 16.3449 17.9502 17.6491 19.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className='userName'>{userDetails?.name}</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="accordianbutton12">
                                        <li><Link className="dropdown-item" href="/account"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6.34961 19.5C7.6538 17.9502 9.60088 17 11.7195 17H12.2792C14.3978 17 16.3449 17.9502 17.6491 19.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> Account</Link></li>
                                        <li><Link className="dropdown-item" href="#!" onClick={() => logout()}>
                                            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z" fill="#1C1C1E" />
                                                <path d="M20.65 11.65L17.86 8.85998C17.7905 8.78853 17.7012 8.73946 17.6036 8.71905C17.506 8.69863 17.4045 8.70781 17.3121 8.74539C17.2198 8.78298 17.1408 8.84727 17.0851 8.93003C17.0295 9.0128 16.9999 9.11027 17 9.20998V11H10C9.45 11 9 11.45 9 12C9 12.55 9.45 13 10 13H17V14.79C17 15.24 17.54 15.46 17.85 15.14L20.64 12.35C20.84 12.16 20.84 11.84 20.65 11.65Z" fill="#1C1C1E" />
                                            </svg> Logout</p>
                                        </Link></li>
                                    </ul>
                                </div>
                                {/* <h2 className="accordion">
                                    <button id='accordianbutton12' className="sidebar-account-btn accordion-button collapsed accordianbut ps-0 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo123" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className="navprofileimgbox me-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M6.34961 19.5C7.6538 17.9502 9.60088 17 11.7195 17H12.2792C14.3978 17 16.3449 17.9502 17.6491 19.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className='userName'>{userDetails?.name}</span>
                                    </button>
                                </h2>
                                <div id="collapseTwo123" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body profilebox1">
                                        <p><Link href="/account" className='bg-transparent' onClick={closeback}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6.34961 19.5C7.6538 17.9502 9.60088 17 11.7195 17H12.2792C14.3978 17 16.3449 17.9502 17.6491 19.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> Account</Link></p>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z" fill="#1C1C1E"></path><path d="M20.65 11.65L17.86 8.85998C17.7905 8.78853 17.7012 8.73946 17.6036 8.71905C17.506 8.69863 17.4045 8.70781 17.3121 8.74539C17.2198 8.78298 17.1408 8.84727 17.0851 8.93003C17.0295 9.0128 16.9999 9.11027 17 9.20998V11H10C9.45 11 9 11.45 9 12C9 12.55 9.45 13 10 13H17V14.79C17 15.24 17.54 15.46 17.85 15.14L20.64 12.35C20.84 12.16 20.84 11.84 20.65 11.65Z" fill="#1C1C1E"></path></svg>
                                            <Link href="#!" className='bg-transparent' onClick={() => logout()}>Logout</Link>
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                    </div>}

                    {!token && <div className="sidebarbutton">
                        <Link href='/signin' onClick={closeback}>Sign in</Link>
                    </div>}

                    <div className="sidebarbutton">
                        <Link href='/contact' onClick={closeback}>Contact us</Link>
                    </div>
                </div>

            </div>



        </>
    );
};

export default Sidebar;
