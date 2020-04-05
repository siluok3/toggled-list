import React, { Component } from 'react';

import classes from './App.css';
import withClass from '../hoc/withClass';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


class App extends Component {
  state = {
    persons: [
      { id: 'dsadasd', name: "Kiriakos", age: 27 },
      { id: 'dsdasdas', name: "Eleni", age: 32 },
      { id: 'sdsd', name: "Kobe", age: 40 },
    ],
    showPersons: false,
    changeCounter: 0,
    authenticated: false,
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

    //Update state like that when depending on old state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
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

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }

    return (
      <Aux>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login:this.loginHandler
          }}
        >
          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          /> 
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
