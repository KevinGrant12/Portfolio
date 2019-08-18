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
      <div className="Bio-img-wrap__ring text-ring"></div>
      <div className="Bio-img-wrap__ring text-ring"></div>
      <img src={portrait} alt=""/>
    </div>
    <p>I don't always design and develop everything myself. But when I do...Ok I pretty much do. Clearly, I love to do both and I hope my website speaks for itself. Also, I am currently seeking an awesome team to become a part of so please feel free to contact me!</p>
  </div>
);

export default Bio;