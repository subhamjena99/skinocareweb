import Testimonials from "@/Components/Experties&Testimonials/Testimonials";
import { noTokenGetRequest } from "@/helpers";

const Testimonial = async () => {

  // TESTIMONIAL API CALL
  const testimonialsRes = await noTokenGetRequest('api/web/testimonials');
  let testimonialsData = testimonialsRes?.data?.status ? testimonialsRes.data?.data : [];
  
  // CASE STUDIES API CALL
  const caseStudiesRes = await noTokenGetRequest('api/web/case-study');
  let caseStudiesData = caseStudiesRes?.data?.status ? caseStudiesRes.data?.data  : [];

  return (
    <Testimonials testimonials={testimonialsData} caseStudies={caseStudiesData} />
  );
};

export default Testimonial;