import React from 'react';
import './Bio.css';
import portrait from './portrait.jpg';

const Bio = () => (
  <div className="Bio">
  <div className="Bio-img-wrap">
      <div className="Bio-img-wrap__ring ring-yellow"></div>
      <div className="Bio-img-wrap__ring ring-turq"></div>
      <div className="Bio-img-wrap__ring ring-pink"></div>
      <div className="Bio-img-wrap__ring ring-clear"></div>
      <div className="Bio-img-wrap__ring text-ring">
        <p>First Text Ring</p>
      </div>
      <div className="Bio-img-wrap__ring text-ring">
        <p>Second Text Ring</p>
      </div>
      <img src={portrait} alt=""/>
    </div>
    <p>I don't always design and develop everything myself. But when I do...Ok I pretty much do. However, I am currently seeking and awesome software team to join!</p>
  </div>
);

export default Bio;