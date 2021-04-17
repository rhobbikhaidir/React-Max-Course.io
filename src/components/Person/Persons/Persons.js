import React from 'react';
import Person from '../Person';

export default function Persons(props) {
  return props.persons.map((person, index) => {
    // console.log(person);
    // console.log(props);
    return (
      <Person
        click={() => props.clicked(index)}
        key={person.id}
        name={person.name}
        age={person.age}
        value={person.name}
        changed={event => props.changed(event, person.id)}
        isAuth={props.isAuth}
      />
    );
  });
}
