import './OurExpertise.css';

const Card = ({ date, para, rating, name, image }) => {
    return (
        <>

            <div className="expertiseCardContainer">

                <div className="datestar">
                    <p>{date}</p>
                    <h6> <img src='/Assets/img/Icons/star.svg' alt="" /><span>{rating}</span></h6>

                </div>

                <div className="nameProfileDate">
                    <div className="profileName">
                        <img src={image? image : '/Assets/img/Testimonials/t1.png'} alt="" />
                        <span>{name}</span>
                    </div>

                    <h5>{date}</h5>
                </div>

                <p className='cardpara'>{para}</p>

            </div>

        </>
    );
};

export default Card;
