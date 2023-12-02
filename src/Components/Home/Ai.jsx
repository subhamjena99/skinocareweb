"use client"

import React from 'react';

import Image from 'next/image';

function Ai() {

    return (
        <>
            <div className="sec2container">
                <div className="sec2containerboxs">
                    <div className="sec2containerbox1">
                        <h2>"Making use of AI for in-depth
                            skin and hair analysis."</h2>
                        <p className='p' >"Our app's cutting-edge AI technology thoroughly assesses your skin and
                            hair, detecting over 20 distinct conditions by leveraging insights from a
                            vast database of 25 million prior cases integrated into its advanced deep
                            learning framework."</p>

                        <div className="sec2cardboxs row">
                            <div className="sec2cardbox col-xl-4">
                                <div className="sec2cardimg">
                                    <Image src='/Assets/img/Ai/sec2cardimg1.png' width={500} height={500} alt="" />
                                </div>
                                <p>Deep-learning
                                    basedimage
                                    recognition
                                </p>
                            </div>
                            <div className="sec2cardbox col-xl-4">
                                <div className="sec2cardimg">
                                    <Image src='/Assets/img/Ai/sec2cardimg2.png' width={150} height={150} alt="" />
                                </div>
                                <p>Instant Skin &
                                    Hair Analysisin
                                    milli-seconds
                                </p>
                            </div>
                            <div className="sec2cardbox col-xl-4">
                                <div className="sec2cardimg">
                                    <Image src='/Assets/img/Ai/sec2cardimg3.png' width={150} height={150} alt="" />
                                </div>
                                <p>High accuracy in
                                    detecting Skin &
                                    Hair issues
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sec2containerbox2">

                        <div className="sec2mainimg">
                            <Image src='/Assets/img/Ai/sec2img.png' quality={100} width={800} height={800} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Ai;
