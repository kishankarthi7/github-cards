import React from 'react';

import './App.css';
import PersonList from './components/PersonList';
import AddPerson from './components/AddPerson';

const testData = [
  {
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook',
  },
  {
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu',
  },
  {
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook',
  },
];

function App(props) {
  return (
    <div className="flex-container">
      <h1>{props.heading}</h1>
      <AddPerson />
      <PersonList profiles={testData} />
    </div>
  );
}

export default App;
