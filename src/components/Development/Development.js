import React from 'react';
import './Development.css';
import Construction from '../Construction/Construction';
import ProjectFilter from '../ProjectFilter/ProjectFilter';
import ProjectCard from '../ProjectCard/ProjectCard';
import mobileMerchant from './images/mobile-merchant.jpg';
import idyllBay from './images/idyll-bay.jpg';
import blog from './images/blog.jpg';
// import { ReactComponent as Shape } from './shape-yellow.svg';
// <Shape className="About-shape" />

const Development = () => {
  return(
    <section className="Development">
      <div className="Development-header">
        <h1>Development</h1>
      </div>
      <ProjectFilter />
      <div className="tempProjects">
        <div className="tempProject">
          <img src={mobileMerchant} alt=""/>
          <h3>Mobile Merchant</h3>
          <p>Compact Ecommerce site built to sell niche items</p>
          <a href="https://mobile-merchant.netlify.com/" target="_blank">Visit Site</a>
        </div>
        <div className="tempProject">
          <img src={idyllBay} alt=""/>
          <h3>Idyll Bay</h3>
          <p>An elegant beach resort website with booking capability</p>
          <a href="#">Coming Soon</a>
        </div>
        <div className="tempProject">
          <img src={blog} alt=""/>
          <h3>Blog Page</h3>
          <p>My interactive blog page built with Gatsby.js</p>
          <a href="#">Coming Soon</a>
        </div>
      </div>
      <Construction />
    </section>
  );
};

export default Development;