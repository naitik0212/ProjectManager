import React, { Component } from 'react';
import Projects from "./Projects";

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        // console.log(this.props);
        return (
            <li className="Project">
                {this.props.project.title} - {this.props.project.category} <a href = '#' onClick={this.deleteProject.bind(this, this.props.project.id)}><sup>x</sup></a>
            </li>
        );
    }
}


export default ProjectItem;

