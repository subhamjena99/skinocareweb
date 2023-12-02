"use client"

import React from 'react';
import Button from '../button/Button';

function SkinHair() {

  return (
    <div id="skin&hair">
      <div className="sec6maincontainer">
        <div className="sec6boxs">
          <div className="sec6box">
            <h2>"Join the SkinOcare experience and revitalise your skin and hair to their optimal health."</h2>
            <p>"Join the SkinOcare experience, where science and beauty converge, and embark on a transformative journey to revitalize your skin and hair, restoring them to the peak of health and radiance through personalized care and expert guidance."</p>
            <Button button="Download App " />
          </div>
          <div className="sec6box">
            <div className="sec6imgbox">
              <img src='/Assets/img/Mobile/sec6.png' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinHair;
