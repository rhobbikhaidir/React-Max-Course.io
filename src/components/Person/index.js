import React from 'react';

import './index.css';

function index(props) {
  const style = {
    '@media (minWidth: 500px)': {
      width: '450px',
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        Im {props.name} and im {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default index;
