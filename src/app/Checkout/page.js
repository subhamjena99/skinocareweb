import Checkoutpage from '@/Components/CheckOut/Checkoutpage';
import { getRequest, postRequest } from '@/helpers';
import { cookies } from 'next/headers';
import React from 'react';

const CheckOut = async () => {

  // GETTING TOKEN FROM COOKIES
  const cookieStore = cookies()
  const token = cookieStore.get('skinocare-auth');

  // CHECKOUT PRODUCTS LISTING API
  // const productsList = (token?.value !== undefined && token?.value !== "undefined") ? await postRequest({ url: `api/user/billing`, token: token?.value, cred: { checkoutType: "cart", } }) : '';
  // let products = productsList?.data?.status ? productsList?.data?.data : [];

  // DEFAULT SHIPPING ADDRESS API
  const defaultAddress = (token?.value !== undefined && token?.value !== "undefined") ? await getRequest({ url: `api/user/default-shipping-address`, token: token?.value }) : '';
  let address = defaultAddress?.data?.status ? defaultAddress?.data?.data : {};

  return (
    <Checkoutpage
      // checkout={products}
      token={token}
      address={address}
    />
  );
};

export default CheckOut;