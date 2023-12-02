import React from 'react';

const Productsidebar3 = ({ close, reviews }) => {

    return (
        <>
            <div className="productsidebarmaincontainer">
                <div className="producsidbarboxs">
                    <div className="productsidbarbox spec-container">
                        <div className="closebutton">
                            <h2>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.7359 6.89649L12.7769 6.17579L10.5601 1.68165C10.4996 1.5586 10.4 1.45899 10.2769 1.39844C9.96833 1.2461 9.59333 1.37305 9.43903 1.68165L7.22223 6.17579L2.26325 6.89649C2.12653 6.91602 2.00153 6.98047 1.90583 7.07813C1.79013 7.19705 1.72637 7.35704 1.72857 7.52294C1.73077 7.68884 1.79874 7.84708 1.91755 7.9629L5.50544 11.4609L4.65778 16.4004C4.6379 16.5153 4.65062 16.6335 4.69449 16.7415C4.73835 16.8496 4.81161 16.9431 4.90596 17.0117C5.00031 17.0802 5.11198 17.1209 5.22829 17.1292C5.3446 17.1375 5.46091 17.113 5.56403 17.0586L9.99958 14.7266L14.4351 17.0586C14.5562 17.1231 14.6968 17.1445 14.8316 17.1211C15.1715 17.0625 15.4 16.7402 15.3414 16.4004L14.4937 11.4609L18.0816 7.9629C18.1793 7.86719 18.2437 7.74219 18.2633 7.60547C18.316 7.26368 18.0777 6.94727 17.7359 6.89649Z" fill="#101828" />
                                </svg> {reviews?.averageRating} Review({reviews?.totalCount})</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={close}>
                                <path d="M22.8748 7.13754C22.7591 7.02166 22.6218 6.92972 22.4706 6.86699C22.3194 6.80427 22.1572 6.77198 21.9935 6.77198C21.8298 6.77198 21.6677 6.80427 21.5165 6.86699C21.3653 6.92972 21.2279 7.02166 21.1123 7.13754L14.9998 13.2375L8.88729 7.12504C8.77156 7.00931 8.63418 6.91751 8.48297 6.85488C8.33177 6.79225 8.1697 6.76001 8.00604 6.76001C7.84238 6.76001 7.68032 6.79225 7.52911 6.85488C7.37791 6.91751 7.24052 7.00931 7.12479 7.12504C7.00906 7.24076 6.91726 7.37815 6.85463 7.52936C6.792 7.68056 6.75977 7.84262 6.75977 8.00629C6.75977 8.16995 6.792 8.33201 6.85463 8.48321C6.91726 8.63442 7.00906 8.77181 7.12479 8.88754L13.2373 15L7.12479 21.1125C7.00906 21.2283 6.91726 21.3656 6.85463 21.5169C6.792 21.6681 6.75977 21.8301 6.75977 21.9938C6.75977 22.1574 6.792 22.3195 6.85463 22.4707C6.91726 22.6219 7.00906 22.7593 7.12479 22.875C7.24052 22.9908 7.37791 23.0826 7.52911 23.1452C7.68032 23.2078 7.84238 23.2401 8.00604 23.2401C8.1697 23.2401 8.33177 23.2078 8.48297 23.1452C8.63418 23.0826 8.77156 22.9908 8.88729 22.875L14.9998 16.7625L21.1123 22.875C21.228 22.9908 21.3654 23.0826 21.5166 23.1452C21.6678 23.2078 21.8299 23.2401 21.9935 23.2401C22.1572 23.2401 22.3193 23.2078 22.4705 23.1452C22.6217 23.0826 22.7591 22.9908 22.8748 22.875C22.9905 22.7593 23.0823 22.6219 23.1449 22.4707C23.2076 22.3195 23.2398 22.1574 23.2398 21.9938C23.2398 21.8301 23.2076 21.6681 23.1449 21.5169C23.0823 21.3656 22.9905 21.2283 22.8748 21.1125L16.7623 15L22.8748 8.88754C23.3498 8.41254 23.3498 7.61254 22.8748 7.13754Z" fill="black" />
                            </svg>
                        </div>

                        <div className="reviewboxs2">
                            {reviews?.list?.map((elem, index) => {
                                return (
                                    <div className="reviewbox2" key={index + 1}>
                                        <div className="reviewboxheading">
                                            <div className="revheadingimg">
                                                <img src={elem?.image ? elem?.image : '/Assets/img/Testimonials/t6.png'} alt="img" />
                                                <h6>{elem?.userName}</h6>
                                            </div>
                                            <span>{new Date(elem?.date)?.toLocaleDateString()}</span>
                                        </div>
                                        <p>{elem?.comment}</p>
                                    </div>
                                )
                            })}
                            {/* <div className="reviewbox2">
                                <div className="reviewboxheading">
                                    <div className="revheadingimg">
                                        <img src='/Assets/img/Testimonials/t6.png' alt="img" />
                                        <h6>Lana Steiner</h6>
                                    </div>
                                    <span>18&nbsp;Jan&nbsp;2022</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas, ipsa maiores placeat cupiditate dicta nesciunt officia, qui doloremque provident magni, quidem reprehenderit aut asperiores quam ullam? Doloribus sit facere asperiores perspiciatis, harum eum vitae nobis repellat, assumenda perferendis rerum.</p>
                            </div>

                            <div className="reviewbox2">
                                <div className="reviewboxheading">
                                    <div className="revheadingimg">
                                        <img src='/Assets/img/Testimonials/t6.png' alt="img" />
                                        <h6>Lana Steiner</h6>
                                    </div>
                                    <span>18&nbsp;Jan&nbsp;2022</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas, ipsa maiores placeat cupiditate dicta nesciunt officia, qui doloremque provident magni, quidem reprehenderit aut asperiores quam ullam? Doloribus sit facere asperiores perspiciatis, harum eum vitae nobis repellat, assumenda perferendis rerum.</p>
                            </div>

                            <div className="reviewbox2">
                                <div className="reviewboxheading">
                                    <div className="revheadingimg">
                                        <img src='/Assets/img/Testimonials/t6.png' alt="img" />
                                        <h6>Lana Steiner</h6>
                                    </div>
                                    <span>18&nbsp;Jan&nbsp;2022</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas, ipsa maiores placeat cupiditate dicta nesciunt officia, qui doloremque provident magni, quidem reprehenderit aut asperiores quam ullam? Doloribus sit facere asperiores perspiciatis, harum eum vitae nobis repellat, assumenda perferendis rerum.</p>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Productsidebar3;
