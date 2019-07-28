import React from 'react';
import './Projects.css';
// import { ReactComponent as Shape } from './shape-yellow.svg';
// <Shape className="About-shape" />

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: 'react'
    };
  };
  handleClick = (event) => {
    this.setState({ projects: event.target.value });
  };
  render() {
    return(
      <section className="Projects">
        <div className="Projects-header header">
          <h1>Projects</h1>
        </div>
        <div className="Projects-filter">
          <ul>
            <li>
              <button onClick={this.handleClick} value="react"><i className="fab fa-react"></i> React</button>
            </li>
            <li>
              <button onClick={this.handleClick} value="csharp">.NET/C#</button>
            </li>
            <li>
              <button onClick={this.handleClick} value="python"><i className="fab fa-python"></i> Python</button>
            </li>
            <li>
              <button onClick={this.handleClick} value="wordpress"><i className="fab fa-wordpress"></i> Wordpress</button>
            </li>
          </ul>
        </div>
        {
          this.state.projects === "react" &&
          <div className="ReactProjects">
            <h1>ReactProjects</h1>
          </div>
        }
        {
          this.state.projects === "csharp" &&
          <div className="NetProjects">
            <h1>.NET Projects</h1>
          </div>
        }
        {
          this.state.projects === "python" &&
          <div className="PythonProjects">
            <h1>PythonProjects</h1>
          </div>
        }
        {
          this.state.projects === "wordpress" &&
          <div className="WordpressProjects">
            <h1>WordpressProjects</h1>
          </div>
        }
      </section>
    );
  };
};