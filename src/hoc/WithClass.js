import React from 'react';

export default function WithClass(WrapperComponents) {
  return props => (
    <div>
      <WrapperComponents />
    </div>
  );
}
