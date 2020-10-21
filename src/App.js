import React, { Component } from 'react';
import './css/App.css';

import NumberList from './components/NumberList';

class App extends Component {

  state = {
    unused: [],
    used: [],
    usedPending: [],
    unusedPending: [],
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

  togglePending = (type, number, state) => {
    let pending = state 
      ? [...this.state[`${type}Pending`], number]
      : this.state[`${type}Pending`].filter(item => item !== number);
    this.setState({
      [`${type}Pending`]: pending,
    });
  }

  toggleUsed = (isUsed) => {

    const toAdd = isUsed ? 'used' : 'unused';
    const toRemove = isUsed ? 'unused' : 'used';

    const added = this.state[toAdd]
      .concat(this.state[`${toRemove}Pending`])
      .sort((a, b) => a - b);

    const removed = this.state[toRemove]
      .filter(value => !this.state[`${toRemove}Pending`].includes(value) )
      .sort((a, b) => a - b);

    this.setState({
      [toAdd]: added,
      [toRemove]: removed,
      [`${toRemove}Pending`]: [],
    });

  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>realsmart Technical Task</h1>
        </header>
        <main className="container">
          <NumberList 
            type="unused"
            numbers={this.state.unused}
            togglePending={this.togglePending}
          />
          <div className="controls">
            <button onClick={() => this.toggleUsed(true)}>Add to used</button>
            <button onClick={() => this.toggleUsed(false)}>Add to unused</button>
          </div>
          <NumberList  
            type="used"
            numbers={this.state.used}
            togglePending={this.togglePending}
          />
        </main>
      </div>
    );
  }
}

export default App;
