import React from 'react';

import './App.css';
import PersonList from './components/PersonList';
import AddPerson from './components/AddPerson';

class App extends React.Component {
  state = { profiles: [] };

  addToPersonList = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div className="flex-container">
        <h1>{this.props.heading}</h1>
        <AddPerson addToPersonList={this.addToPersonList} />
        <PersonList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
