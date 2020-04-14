import React, {Component} from 'react';
import './App.css';
import Person from './components/Person.js'

class App extends Component { 
  state = {
    persons: [
      { string: 'X', number: 1 },
      { string: 'Y', number: 2 },
      { string: 'Z', number: 3 },
    ]
  }

  shuffleHandler = (newString) => {
    newString = newString || 'W'
    this.setState({ persons: [
        { string: 'X', number: 1 },
        { string: newString, number: 2 },
        { string: 'Z', number: 3 },
      ] 
    })
  }

  changeHandler = (event) => {
    this.setState({ persons: [
        { string: 'X', number: 1 },
        { string: event.target.value, number: 2 },
        { string: 'Z', number: 3 },
      ] 
    })
  }

  render() { return (
    <div className="App">
      <h1>text</h1>
      <h1>Another text</h1>
      <button onClick={() => this.shuffleHandler('Q')}>button</button>
      <Person handlerShuffle={this.shuffleHandler.bind(this, 'P')} string={this.state.persons[0].string} number={this.state.persons[0].number} />
      <Person handlerChange={this.changeHandler} string={this.state.persons[1].string} number={this.state.persons[1].number} />
      <Person string={this.state.persons[2].string} number={this.state.persons[2].number} />
    </div>
  )}
}

export default App;
