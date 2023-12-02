import SkinAndCareHeading from "../SkinAndCareHeading";
import './PrivcyPolicy.css';

const Policies = ({ data }) => {

    const h2 = data?.[0]?.name;

    return (
        <div className="privcyPolicyMainContainer">

            <div className="privcyPolicycontainer">

                <SkinAndCareHeading h2={h2} />


                <div className="privcypolicycontent" dangerouslySetInnerHTML={{ __html: data?.[0]?.content }}>
                </div>

            </div>

        </div>
    );
};

export default Policies;