import React, { Component } from 'react';

import classes from './App.css';

import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dsadasd', name: "Kiriakos", age: 27 },
      { id: 'dsdasdas', name: "Eleni", age: 32 },
      { id: 'sdsd', name: "Kobe", age: 40 },
    ],
    otherState: "other state",
    showPersons: false,
  };

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              change={(e) => this.nameChangeHandler(e, person.id)}
            />
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>List of persons</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
