import React, { Component } from 'react';
import './css/App.css';

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
        <header>
          <h1>realsmart Technical Task</h1>
        </header>
        <main className="container">
          <NumberList title="Unused numbers" numbers={this.state.unused} />
          <div className="controls">
            <button>Add to used</button>
            <button>Add to unused</button>
          </div>
          <NumberList title="Used numbers" numbers={this.state.used} />
        </main>
      </div>
    );
  }
}

export default App;
