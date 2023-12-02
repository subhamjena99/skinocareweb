import Experties from "@/Components/Experties&Testimonials/Experties";
import { noTokenGetRequest } from "@/helpers";

const Experts = async () => {

  // RELATED PRODUCTS LISTING API
  const doctorsList = await noTokenGetRequest(`api/web/doctor`);
  let doctors = doctorsList?.data?.status ? doctorsList?.data?.data : [];

  return (
    <Experties doctors={doctors} />
  );
};

export default Experts;