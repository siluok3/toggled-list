import React from 'react';

import WithClass from '../../../hoc/WithClass'
import classes from './Person.css';

const person = (props) => {
  return (
    <WithClass classes={classes.Person}>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </WithClass>
  )
}

export default person;