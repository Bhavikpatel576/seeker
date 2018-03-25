import React, { Component } from 'react';
import logo from './purple_beam_buff.gif';
import './App.css';
import Sound from 'react-sound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Seeker</h1>
        </header>
        <p className="App-intro">
          To get started, move your computer around.
        </p>
        <Sound/>
      </div>
    );
  }
}

export default App;
