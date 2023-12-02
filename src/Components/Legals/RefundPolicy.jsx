import SkinAndCareHeading from '../SkinAndCareHeading';
import './PrivcyPolicy.css';

const RefundPolicy = () => {

    const h2 = `SkinOcare Refund and Cancellation Policy`;

    return (
        <>

            <div className="privcyPolicyMainContainer">

                <div className="privcyPolicycontainer">

                    <SkinAndCareHeading h2={h2} />


                    <div className="privcypolicycontent">
                        <p>SkinOcare takes every step possible to ensure a trouble-free purchase from our shop. This includes returning a product or cancelling an order. We highly encourage you to be selective with purchasing and placing an order. Make sure that you have made the right choice before making an order.</p>

                        <h3>Cancellation</h3>

                        <p>To cancel a product, you are required to use your SkinO Care account and request a cancellation. While we entertain reasonable requests. We retain the right to deny any such action without providing an explanation. This, we have in place, to prevent the misuse of the system by malicious actors trying to disrupt the normal functioning of the shop and SkinO Care.</p>

                        <p>We are very particular about what kind of products are eligible for a return request. Please understand that, once received, only damaged products will be accepted back. For the same, you need to provide proof of purchase and undisturbed packaging. At this point, we do not support the return of open boxes. Only unused, unopened packages are currently eligible for return.</p>

                        <h3>Refunds</h3>

                        <p>Please note that if you have claimed a return, you should not send the package back to us without our instruction. Do it only after a confirmation from our end. We will then verify your claim and a decision will be made. If the decision is in your favour, we will process the refund and the amount will be returned to you through your original mode of payment ( where applicable ). We will also notify you if your decision is not in your favour.</p>

                        <h3>Refunds that are late or never received by you</h3>

                        <p>Once approved, we will process your refund as per our refund policy within a few working days. We make sure that all refunds are processed to the best of our ability. If you have still not received your refund which we have processed, you can</p>

                        <ol>
                            <li>1. Talk to your credit card company</li>
                            <li>2. Talk to your bank</li>
                        </ol>

                        <p>Because there may be a delay from their end. Give it enough time, talk to the people responsible at your bank or credit card company. If all of them are checked properly and failed, you can use our standard modes of communication to reach us for more information.</p>

                        <h3>Refund for Discount offers</h3>

                        <p>We currently do not support any returns for special sale or discount offers, unless specified otherwise. Returns apply only to products that were sold during the regular sale.</p>

                        <h3>Exchanging Products</h3>

                        <p>Any replacement is applicable only in the case of defective or damaged products. Depending on your location the time for replacement products to reach you may vary.</p>

                        <h3>Shipping charges</h3>

                        <p>You are supposed to ship them back to us ( only after confirmation from our side ). The shipping charges are to be paid by you and are not refundable. We will deduct the shipping charges where applicable from the refund to ensure that it is not borne by SkinO Care.</p>

                    </div>

                </div>

            </div>

        </>
    );
};

export default RefundPolicy;
