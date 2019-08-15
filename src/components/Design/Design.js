import React from 'react';
import './Design.css';
import '../Development/Development.css';
import Construction from '../Construction/Construction';
import website from './images/website.jpg';
import ducky from './images/ducky.jpg';
import mouthy from './images/mouthy.jpg';

const Design = () => {
  return(
    <section className="Design">
      <div className="Design-header">
        <h1>Design</h1>
      </div>
      <div className="tempProjects">
        <div className="tempProject">
          <img src={website} alt=""/>
          <h3>Web Design</h3>
          <p>Compact Ecommerce site built to sell niche items</p>
        </div>
        <div className="tempProject">
          <img src={ducky} alt=""/>
          <h3>Logos</h3>
          <p>An elegant beach resort website with booking capability</p>
        </div>
        <div className="tempProject">
          <img src={mouthy} alt=""/>
          <h3>Characters</h3>
          <p>My interactive blog page built with Gatsby.js</p>
        </div>
      </div>
      <Construction />
    </section>
  );
};

export default Design;