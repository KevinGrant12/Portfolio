import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  let { images, name, excerpt, tags } = project;
  tags = tags.map((tag, index) => {
    console.log({tag})
    return <div className="projectTag" key={index}>{tag}</div>
  });
  return(
    <article className="projectCard">
      <img src={images[0]} alt=""/>
      <div className="projectCard-details">
        <h3>{name}</h3>
        <p>{excerpt}</p>
        <div className="projectTags">
          {tags}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;