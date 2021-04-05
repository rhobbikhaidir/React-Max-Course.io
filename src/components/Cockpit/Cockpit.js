import { useState } from 'react';
import './Cockpit.css';

export default function Cockpit(props) {
  const [showCockpit, setShowCockpit] = useState(true);
  const clasess = [];
  const backgroundToggle = [];
  if (props.persons.length <= 2) {
    clasess.push('red');
  }

  if (props.persons.length <= 1) {
    clasess.push('bold');
    backgroundToggle.push('btn-red');
  }

  const handleCockpit = () => {
    setShowCockpit(false);
  };
  return (
    <div>
      <button onClick={handleCockpit}> Remove CockPit </button>
      {showCockpit ? (
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
      ) : (
        ''
      )}
    </div>
  );
}
