import React from 'react';
import './Cockpit.css';

export default function Cokcpit(props) {
  const clasess = [];
  const backgroundToggle = [];
  if (props.persons.length <= 2) {
    clasess.push('red');
  }

  if (props.persons.length <= 1) {
    clasess.push('bold');
    backgroundToggle.push('btn-red');
  }
  return (
    <div>
      <h1>Hello im react app</h1>
      <p className={clasess.join(' ')}>its really working</p>
      <button
        className={['button', backgroundToggle].join(' ')}
        onClick={props.clicked}
      >
        Toggle persons
      </button>
    </div>
  );
}
