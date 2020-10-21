import React, { Component } from 'react';
import './App.css';

import NumberList from './components/NumberList';

class App extends Component {

  state = {
    unused: [],
    used: [],
  };

  componentDidMount = () => {
    let numbers = [];
    for (let i = 1; i <=100; i++) {
      numbers.push(i);
    }
    this.setState({
      unused: numbers,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>realsmart Technical Task</h1>
        <div className="container">
          <NumberList title="Unused numbers" numbers={this.state.unused} />
          <NumberList title="Used numbers" numbers={this.state.used} />
        </div>
      </div>
    );
  }
}

export default App;
