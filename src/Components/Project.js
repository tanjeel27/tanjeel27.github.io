import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);

    this.project = props.project;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="project">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          {
            this.project.map((pro, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{pro.name}</h3>
                  <div className="subheading mb-3">{pro.language}</div>
                  <p>{pro.about}</p>
                </div>
                <div className="resume-date text-md-right">
                  <a href={pro.link}> Demo</a>
                </div>

              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Project;