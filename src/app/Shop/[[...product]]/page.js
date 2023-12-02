
import Product from "@/Components/Products/Product";
import ProductList from "@/Components/Products/ProductList";
import { getRequest, noTokenGetRequest, noTokenPostRequest } from "@/helpers";
import { cookies } from 'next/headers';

const Shop = async ({ params }) => {

  // GETTING TOKEN FROM COOKIES
  const cookieStore = cookies()
  const token = cookieStore.get('skinocare-auth');

  // PRODUCT LISTING API
  const productList = await noTokenPostRequest({ url: 'api/web/products', cred: { pageNumber: 1 } });
  let products = productList?.data?.status ? productList.data?.data : [];

  // FILTERS API
  const filters = await noTokenGetRequest('api/web/filter');
  let filtersData = filters?.data?.status ? filters?.data?.data : {};

  // PRODUCT DETAILS API
  const slug = params?.product?.[0];
  const product = slug ?
  (token?.value !== undefined && token?.value !== "undefined") ?
      await getRequest({ url: `api/web/products/${slug}`, token: token?.value })
      :
      await noTokenGetRequest(`api/web/products/${slug}`)
    :
    '';
  let productDetails = product?.data?.status ? product?.data?.data : {};

  // PRODUCT REVIEWS API
  // const productReviews = slug ? await noTokenGetRequest(`api/web/reviews/${slug}`) : '';
  // let reviews = productReviews?.data?.status ? productReviews?.data?.data : {};
  // console.log(reviews);

  // RELATED PRODUCTS LISTING API
  const relatedProductsList = slug ? await noTokenGetRequest(`api/web/related-products/${slug}`) : '';
  let relatedProducts = relatedProductsList?.data?.status ? relatedProductsList?.data?.data : [];

  // // RECENTLY VIEW PRODUCTS LISTING API
  const recentProductsList = (slug && token?.value !== undefined && token?.value !== "undefined") ? await getRequest({ url: `api/user/recent-products`, token: token?.value }) : '';
  let recentProducts = recentProductsList?.data?.status ? recentProductsList?.data?.data : [];

  // CART DATA
  const cart = (token?.value !== undefined && token?.value !== "undefined") ? await getRequest({ url: `api/user/cart`, token: token?.value }) : [];
  let cartDetails = cart?.data?.status ? cart?.data?.data : [];

  // const product = await getProducts(params?.product?.[0])
  // console.log("Recent Products List:",recentProducts);

  return (
    params?.product?.[0] ?
      <Product productDetails={productDetails} relatedProducts={relatedProducts} recentProducts={recentProducts} cartData={cartDetails} />
      :
      <ProductList data={products} filters={filtersData} />
    // <h1>ABC</h1>
  );
};

export default Shop;