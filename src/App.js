// @Vendors
import React from 'react';

// @Styles
import './App.css';
import './components/AutoComplete/AutoComplete.css';

import ClassAutoComplete from './components/AutoComplete/ClassAutoComplete/ClassAutoComplete';
import FunctionalAutoComplete from './components/AutoComplete/FunctionalAutoComplete/FunctionalAutoComplete';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClassAutoComplete />

        <FunctionalAutoComplete />
      </div>
    );
  }
}
