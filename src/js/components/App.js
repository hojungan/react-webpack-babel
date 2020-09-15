import React, { Component } from "react";
import './App.css'

class App extends Component {

  render () {
    return (
      <main>
        <h1>React with Webpack and Babel</h1>
        <p>run <span className="code-block">npm run start</span> to start local dev server</p>
        <p>run <span className="code-block">npm build</span> to compile your project</p>
      </main>
    );
  }
}

export default App;