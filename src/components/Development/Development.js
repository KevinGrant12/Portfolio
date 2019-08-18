import React from 'react';
import './Development.css';
import Construction from '../Construction/Construction';
import ProjectFilter from '../ProjectFilter/ProjectFilter';
import ProjectCard from '../ProjectCard/ProjectCard';
import mobileMerchant from './images/mobile-merchant.jpg';
import idyllBay from './images/idyll-bay.jpg';
import blog from './images/blog.jpg';
import { ProjectContext } from '../../context';

// 1. Add loading animation

export default class Development extends React.Component {
  static contextType = ProjectContext;
  componentDidMount = () => {
    console.log('Development mount');
  };
  render() {
    console.log("context ", this.context)
    let { loading, projects } = this.context;
    projects = projects.map(project => {
      return <ProjectCard key={project.id} project={project}></ProjectCard>
    });
    console.log({loading, projects});
    return(
      <section className="development">
        <div className="development-header section-header container">
          <h1>Development</h1>
        </div>
        <div className="development-projects container">
          {projects}
        </div>
        <Construction />  
      </section>
    );
  };
};