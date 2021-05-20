import React from 'react';
import './App.css';

import AutoComplete from './components/AutoComplete/AutoComplete';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AutoComplete />
      </div>
    );
  }
}
