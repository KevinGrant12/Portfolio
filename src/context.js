import React from 'react';
import items from './data';

const ProjectContext = React.createContext();

class ProjectProvider extends React.Component {
  state = {
    projects: [],
    loading: false
  };
  componentDidMount() {
    console.log('context mounted');
    let projects = this.formatData(items);
    this.setState({
      projects
    }, () => console.log('projects state set', projects));
  };
  formatData = (items) => {
    console.log('formatData');
    let tempProjects = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let project = {...item.fields,images,id};
      return project;
    });
    return tempProjects;
  };
  render() {
    return(
      <ProjectContext.Provider value={{...this.state}}>
        {this.props.children}
      </ProjectContext.Provider>
    );
  };
};

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext};