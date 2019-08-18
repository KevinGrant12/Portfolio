import React from 'react';
import './Design.css';
import '../Development/Development.css';
import Construction from '../Construction/Construction';
import website from './images/website.jpg';
import ducky from './images/ducky.jpg';
import mouthy from './images/mouthy.jpg';

const Design = () => {
  return(
    <section className="design">
      <div className="design-header section-header container">
        <h1>Design</h1>
      </div>
      <div className="tempProjects">
        <div className="tempProject">
          <img src={website} alt=""/>
          <h3>Web Design</h3>
        </div>
        <div className="tempProject">
          <img src={ducky} alt=""/>
          <h3>Logos</h3>
        </div>
        <div className="tempProject">
          <img src={mouthy} alt=""/>
          <h3>Characters</h3>
        </div>
      </div>
      <Construction />
    </section>
  );
};

export default Design;