import React from 'react';
import projects from './data';

const ProjectContext = React.createContext();

class ProjectProvider extends React.Component {
  state = {
    
  };
};

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext}