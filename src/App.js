import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import uuid from 'uuid';


class App extends Component {

  constructor() {
      super();
      this.state = {
          projects: [

          ]
      }
  }

  componentWillMount() {
      this.setState({
          projects: [
              {
                  id:uuid.v4(),
                  title: 'EatHub- Yelp Visualization',
                  category: 'Web Development - Viz'
              },
              {
                  id:uuid.v4(),
                  title: 'Save Me',
                  category: 'Mobile Development - Android'
              },
              {
                  id:uuid.v4(),
                  title: 'Image Recognition',
                  category: 'Cloud - AWS'
              }]
      });
  }

    handlesAddProject(project) {
      // console.log(project);
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index,1);
        this.setState({projects: projects});



    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title"><hr />Welcome to Project Manager<hr /></h1>

        </header>
        <div className="App-intro">

            <h2>My Project List:</h2>
            <Projects projects = {this.state.projects} onDelete = {this.handleDeleteProject.bind(this)}/>
            <hr />
            <AddProject addProject = {this.handlesAddProject.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
