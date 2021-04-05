import React, { Component } from 'react';
import Persons from '../components/Person/Persons/Persons';
import './App.css';
import Cokcpit from '../components/Cockpit/Cockpit';

export default class App extends Component {
  state = {
    persons: [
      { id: 'awks1', name: 'Rhoka', age: 20 },
      { id: 'awks2', name: 'Ainun', age: 21 },
      { id: 'awks3', name: 'Apri', age: 19 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  togglePersonssHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personsIndex => {
    const persons = this.state.persons;
    persons.splice(personsIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  // nameChangeHandler()

  render() {
    // this.nameChangeHandler();
    // console.log(this.state);

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '15px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black',
      };
    }

    return (
      <div className="App">
        <Cokcpit
          persons={this.state.persons}
          clicked={this.togglePersonssHandler}
        />
        {persons}
      </div>
    );
  }
}
