import React from 'react';

import classes from './Cockpit.css';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = [classes.button];
  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>List of persons</p>
      <button
        className={btnClass.join(' ')}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;