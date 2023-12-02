
import { getRequest } from '@/helpers';
import { cookies } from 'next/headers';
import AccountAddress from "@/Components/Account/AccountAddress";

const Account = async () => {

  // GETTING TOKEN FROM COOKIES
  const cookieStore = cookies()
  const token = cookieStore.get('skinocare-auth');
  
 // RECENTLY VIEW PRODUCTS LISTING API
 const addressList = (token?.value !== undefined && token?.value !== "undefined") ? await getRequest({ url: `api/user/shipping-address`, token: token?.value }) : '';
 let address = addressList?.data?.status ? addressList?.data?.data : [];

  return (
    <AccountAddress addressList={address} token={token} />
  );
};

export default Account;