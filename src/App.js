import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ComponentExample';
import PureComponent from './components/PureComponentExample';
import FunctionalComponent from './components/FunctionalComponentExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {React.createElement('div', null, 'Hello World!')}
      <ClassComponent name="world" />
      <PureComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
