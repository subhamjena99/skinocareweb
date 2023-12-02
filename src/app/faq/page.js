import FAQs from "@/Components/FAQS";
import { noTokenGetRequest } from "@/helpers";

// async function getFaq(url) {

//   const res = noTokenGetRequest('api/web/faqs');
//   const products = await res.json()

//   return products;
// };

const FAQ = async () => {

  const res = await noTokenGetRequest('api/web/faqs');
  let data = res?.data?.status ? res.data?.data  : []

  return (
    <FAQs faqs={data} />
  );
};

export default FAQ;