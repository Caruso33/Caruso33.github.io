import React, { Component } from 'react';
import Header from './views/Header';
import Fotos from './views/Fotos';
import Themen from './views/Themen';
import Kontakt from './views/Kontakt';
import Impressum from './views/Impressum';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Themen/>
        <Kontakt/>
        <Impressum/>
      </div>
    );
  }
}

export default App;
