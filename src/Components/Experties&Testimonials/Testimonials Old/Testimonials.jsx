import SkinHair from '../Home/SkinHair';
import SkinAndCareHeading from '../SkinAndCareHeading';
import Card from './Card';
import './OurExpertise.css'

const Testimonials = (props) => {

    // FETCHED DATA FROM API ON SERVER SIDE
    const testimonials = props?.testimonials;

    const h2 = `"Skinocare Success Stories"`;
    const p = ` "Real Stories, Real Results, Real People"`;

    return (
        <>

            <div className="ourExpertiseMainContainer">
                <div className="ourExpertiseContainer">

                    <SkinAndCareHeading h2={h2} p={p} />

                    <div className="ourExpertiseCards">

                        {
                            testimonials?.map((elem, index) => {
                                return (
                                    <Card date={(new Date(elem?.createdAt))?.toLocaleDateString()} para={elem?.description} rating={(elem?.rating)?.toFixed(1)} name={elem?.name} image={elem?.image} key={index + 1} />
                                )
                            })
                        }

                    </div>

                    <SkinHair />

                </div>
            </div>

        </>
    );
};

export default Testimonials;

