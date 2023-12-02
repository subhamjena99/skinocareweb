// import LegalPolicies from "@/Components/Legals";
// import PrivacyPolicy from "@/Components/Legals/PrivacyPolicy";
// import TermsofService from "@/Components/Legals/TermsofService";
// import RefundPolicy from "@/Components/Legals/RefundPolicy";
import { noTokenGetRequest } from "@/helpers";
import Policies from "@/Components/Legals";
import SkinAndCareHeading from "@/Components/SkinAndCareHeading";


const Legal = async ({ params }) => {

  // LEGAL PAGES API
  const legals = await noTokenGetRequest('api/web/pages');
  let legalPages = legals?.data?.status ? legals?.data?.data : [];
  // FILTERING PAGES ON THE BASIS OF INCOMING SLUG
  const legalPagesData = legalPages?.filter(elem => elem?.slug === params?.pages);

  // TERMS & CONDITIONS DATA
  // const terms = legalPages?.filter(elem => elem?.name === 'Terms of Service');
  // // PRIVACY POLICY DATA
  // const privacy = legalPages?.filter(elem => elem?.name === "Privacy Policy");
  // // SHIPPING POLICY DATA
  // const shipping = legalPages?.filter(elem => elem?.name === "Shipping Policy");
  // // REFUND POLICY DATA
  // const refund = legalPages?.filter(elem => elem?.name === "Refund and Cancellation Policy");

  // return (
  //   params?.pages === 'terms' ?
  //     <TermsofService />
  //     :
  //     params?.pages === 'privacy-policy' ?
  //       <PrivacyPolicy />
  //       :
  //       params?.pages === 'shipping-policy' ?
  //         <LegalPolicies />
  //         :
  //         params?.pages === 'refund-policy' ?
  //           <RefundPolicy />
  //           :
  //           "404 Not Found"
  // );
  return (
    legalPagesData?.length ?
      <Policies data={legalPagesData} />
      :
      <div className="privcyPolicyMainContainer">
        <div className="privcyPolicycontainer">
          <SkinAndCareHeading h2={"404 Not Found"} />
        </div>
      </div>
  );
};

export default Legal;