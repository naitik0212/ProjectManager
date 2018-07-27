import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'

class App extends Component {

  constructor() {
      super();
      this.state = {
          projects: [
              {
                  title: 'EatHub- Yelp Visualization',
                  category: 'Web Development - Viz'
              },
              {
                  title: 'Save Me',
                  category: 'Mobile Development - Android'
              },
              {
                  title: 'Image Recognition',
                  category: 'Cloud - AWS'
              }
          ]
      }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Project Manager</h1>
        </header>
        <div className="App-intro">
            <h2>My Project List:</h2>
            <Projects projects = {this.state.projects} />
        </div>
      </div>
    );
  }
}

export default App;
