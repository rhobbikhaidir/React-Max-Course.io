import React, { Component } from 'react';
import Person from './elements/Person';
import './App.css';

export default class App extends Component {
  state = {
    persons: [
      { id: 'awks1', name: 'Rhoka', age: 23 },
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

  render() {
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black',
      };
    }

    const clasess = [];
    if (this.state.persons.length <= 2) {
      clasess.push('red');
    }

    if (this.state.persons.length <= 1) {
      clasess.push('bold');
    }

    return (
      <div className="App">
        <h1>Hello im react app</h1>
        <p className={clasess.join(' ')}>its really working</p>
        <button className="button" onClick={this.togglePersonssHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}
