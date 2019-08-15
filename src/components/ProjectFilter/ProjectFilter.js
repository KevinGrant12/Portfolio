import React from 'react';
import './ProjectFilter.css';

export default class ProjectFilter extends React.Component {
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
      <section className="Projects-filter-wrap">
        <div className="Projects-filter">
          <ul>
            <li>
              <button onClick={this.handleClick} value="react"><i className="fab fa-react"></i> React</button>
            </li>
            <li>
              <button onClick={this.handleClick} value="vue"><i class="fab fa-vuejs"></i> Vue</button>
            </li>
            <li>
              <button onClick={this.handleClick} value="python"><i className="fab fa-python"></i> Python</button>
            </li>
          </ul>
        </div>
        {
          this.state.projects === "react" &&
          <div className="ReactProjects">
          </div>
        }
        {
          this.state.projects === "csharp" &&
          <div className="NetProjects">
          </div>
        }
        {
          this.state.projects === "python" &&
          <div className="PythonProjects">
          </div>
        }
      </section>    
    );
  };
};