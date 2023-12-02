import SkinAndHair from "@/Components/SkinAndHair";
import SkinAndHairDetails from "@/Components/SkinAndHair/SkinAndHairDetails";

const page = ({ params }) => {

  const slug = params?.topic?.[0];

  return (
    slug ?
      <SkinAndHairDetails />
      :
      <SkinAndHair />
  );
};

export default page;