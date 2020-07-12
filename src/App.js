import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Ritesh", age: 29 },
      { name: "Dhvani", age: 27 },
      { name: "newbaby", age: -1 }
    ]
  })

  const [otherState, setOtherState] = useState({
    other: 'some other value'
  })

  const switchNameHandler = () => {
    // console.log('was clicked!')
    /*
    this.state.persons[0].name = "Mahesh"
    if you do above then you get a warning as follows:
    ./src/App.js
  Line 17:5:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    DON't DO THIS
    */
   console.log("inside switchNameHandler")
    setPersonsState({
      persons: [
        { name: "Rakesh", age: 36 },
        { name: "Bhumi", age: 31 },
        { name: "newbaby", age: -1 }
      ]
    })
  }

  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1>Hi, I'm a React App....</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies are talking and cooking</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
