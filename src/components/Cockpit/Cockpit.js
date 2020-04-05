import React, { useContext } from 'react';

import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';

const cockpit = props => {
  const authContext = useContext(AuthContext);

  const assignedClasses = [];
  let btnClass = [classes.button];
  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
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
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(cockpit);