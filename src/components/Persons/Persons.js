import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  render() {
    return (
      this.props.persons.map((person, index) => {
        return <Person
          key={person.id}
          name={person.name} 
          age={person.age}
          click={() => this.props.clicked(index)}
          change={(e) => this.props.changed(e, person.id)}
        />
      })
    );
  }
  
}

export default Persons;