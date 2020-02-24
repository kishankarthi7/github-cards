import React, { useState } from 'react';
import Axios from 'axios';

function AddPerson(props) {
  const [userName, setUserName] = useState('');

  const displayPerson = async event => {
    event.preventDefault();

    const personsDataResponse = await Axios.get(
      `https://api.github.com/users/${userName}`,
    );

    props.addToPersonList(personsDataResponse.data);
  };

  return (
    <div>
      <form onSubmit={displayPerson}>
        <input
          type="text"
          placeholder="type github username"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <button>Add Person</button>
      </form>
    </div>
  );
}

export default AddPerson;
