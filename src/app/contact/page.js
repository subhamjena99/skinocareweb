import ContactUs from "@/Components/Contact";
import { noTokenGetRequest } from "@/helpers";

const Contact = async() => {
  
  // SYSTEM SETTINGS
  const settings =  await noTokenGetRequest(`api/web/settings/general_settings`);
  let siteDetails = settings?.data?.status ? settings?.data?.data : {};

  return (
    <ContactUs siteDetails={siteDetails} />
  );
};

export default Contact;