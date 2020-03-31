import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Kiriakos", age: 27 },
      { name: "Eleni", age: 32 },
      { name: "Kobe", age: 40 },
    ],
  });

  const handleClick = () => {
    setPersonsState({
      persons: [
        { name: "Kiri", age: 27 },
        { name: "Eleni", age: 32 },
        { name: "Kobe", age: 20 },
      ],
    });
  };

  console.log(personsState);

  return (
    <div className="App">
      <button onClick={handleClick}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
        Hobbies: Farting
      </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;