import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer/Footer';
import Script from 'next/script';
import '../fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import { cookies } from 'next/headers';
import { getRequest, noTokenGetRequest } from '@/helpers';
import CartContextWrapper from '@/Context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Skinocare',
  description: 'skinocare',
};

export default async function RootLayout({ children }) {

  // GETTING TOKEN FROM COOKIES
  const cookieStore = cookies()
  const token = cookieStore.get('skinocare-auth');

  // SYSTEM SETTINGS
  const settings = await noTokenGetRequest(`api/web/settings/general_settings`);
  let siteDetails = settings?.data?.status ? settings?.data?.data : {};

  // CART DATA
  // const cart = (token?.value !== undefined && token?.value !== "undefined") ? await getRequest({ url: `api/user/cart`, token: token?.value }) : [];
  // let cartDetails = cart?.data?.status ? cart?.data?.data : [];

  // USER DETAILS
  const user = (token?.value !== undefined && token?.value !== "undefined") ? await getRequest({ url: `api/user/user-details`, token: token?.value }) : {};
  let userDetails = user?.data?.status ? user?.data?.data : {};

  return (

    <html lang="en">

      <head>

      </head>

      <body className={inter.className}>

        <CartContextWrapper>

          <Header token={token} userDetails={userDetails} siteDetails={siteDetails} />

          {children}

          <Footer siteDetails={siteDetails} />

        </CartContextWrapper>
        
        <>
          <Script strategy="lazyOnload" src="/Assets/js/font-awesome_6.4.2_js_all.min.js" />
          <Script strategy="lazyOnload" src="/Assets/js/bootstrap_5.3.1.bundle.min.js" />
        </>
      </body>

    </html>

  );
};
