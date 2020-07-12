import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Ritesh", age: 29 },
      { name: "Dhvani", age: 27 },
      { name: "newbaby", age: -1 }
    ],
    other: 'some other value'
  }


  switchNameHandler = (newName) => {
    // console.log('was clicked!')
    /*
    this.state.persons[0].name = "Mahesh"
    if you do above then you get a warning as follows:
    ./src/App.js
  Line 17:5:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    DON't DO THIS
    */
    console.log("inside switchNameHandler")
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: "Dhvani", age: 31 },
        { name: "newbaby", age: -1 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 36 },
        { name: "Dhvani", age: 31 },
        { name: "newbaby", age: -1 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App....</h1>
        <button onClick={() => this.switchNameHandler('Rakesh')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Ritesh')} changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        // `this.switchNameHandler.bind(this, newName)` - better performance compared to `() => this.switchNameHandler('Rakesh')`
        >My hobbies are talking and cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }

}

export default App;
