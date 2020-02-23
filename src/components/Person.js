import React from 'react';

function Person(props) {
  const profile = { ...props };

  return (
    <div className="flex-item">
      <img src={profile.avatar_url} alt="" />
      <div className="info">
        <h3>{profile.name}</h3>
        <h3>{profile.company}</h3>
      </div>
    </div>
  );
}

export default Person;
