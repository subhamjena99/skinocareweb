import { useState } from 'react'
import ReactPlayer from 'react-player';
import Modal from 'react-bootstrap/Modal';

import './SkinAndCare.css'


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton style={{ backgroundColor: "var(--foundation-gold-light, #FEFBF4)" }}>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "var(--foundation-gold-light, #FEFBF4)", position: "relative" }} >

                <ReactPlayer className='popupvideo' url='/Assets/videos/sample.mp4' controls={true} width="100%" height="100%" playing={true} />

            </Modal.Body>
        </Modal>
    );
};



const SkinAndHairCard = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>

            <div className='skinAndAcretwobox a' onClick={() => setModalShow(true)} >
                <img src='/Assets/img/Story/ourStoryPerson.png' alt="" />
                <div className='onimgcontent'>
                    <p>Topic name</p>
                    <h4>Dr. Kiran Joshi</h4>
                </div>
                <div className='videoplaybutton'>
                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                </div>
            </div>


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default SkinAndHairCard;