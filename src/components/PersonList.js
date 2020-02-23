import React from 'react';

import Person from './Person';

function PersonList(props) {
  return (
    <div>
      {props.profiles.map(person => (
        <Person {...person} />
      ))}
    </div>
  );
}

export default PersonList;
