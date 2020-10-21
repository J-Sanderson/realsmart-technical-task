import React, { Component } from 'react';
import './App.css';

import NumberList from './components/NumberList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>realsmart Technical Task</h1>
        <NumberList title="Unused numbers" />
        <NumberList title="Used numbers" />
      </div>
    );
  }
}

export default App;
