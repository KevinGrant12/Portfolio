import React from 'react';
import './ZenCircle.css';
import zenOne from './zen-1.png';
import zenTwo from './zen-2.png';
import zenThree from './zen-3.png';
import zenFour from './zen-4.png';
import zenFive from './zen-5.png';

const ZenCircle = () => (
  <div className="ZenCircle">
    <img src={zenOne} alt="zen circle"/>
    <img src={zenTwo} alt="zen circle"/>
    <img src={zenThree} alt="zen circle"/>
    <img src={zenFour} alt="zen circle"/>
    <img src={zenFive} alt="zen circle"/>
  </div>
);

export default ZenCircle;