import React from 'react';

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';

const person = (props) => {
  return (
    <Aux>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </Aux>
  )
}

export default withClass(person, classes.Person);