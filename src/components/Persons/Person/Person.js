import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context'; 

import withClass from '../../../hoc/withClass';
import classes from './Person.css';

const person = (props) => {
  const inputRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Aux>
      {authContext.authenticated ? <p>Authenticated</p> : <p>Please login</p>}
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input 
        type="text"
        ref={inputRef}
        onChange={props.change} 
        value={props.name}
      />
    </Aux>
  )
}

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(person, classes.Person);