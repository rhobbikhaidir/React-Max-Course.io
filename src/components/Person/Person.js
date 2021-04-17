import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import AuthContext from '../../context/AuthContext';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext;

  componentDidMount() {
    console.log(this.context.authenticated);
    this.inputElementRef.current.focus();
  }

  style = {
    '@media (minWidth: 500px)': {
      width: '450px',
    },
  };
  render() {
    return (
      <div className="Person" style={this.style}>
        {this.context.authenticated ? (
          <p>authenticated</p>
        ) : (
          <p>Please Login</p>
        )}

        <p onClick={this.props.click}>
          Im {this.props.name} and im {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElementRef}
        />
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};
