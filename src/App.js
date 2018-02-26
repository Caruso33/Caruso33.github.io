import React, { Component } from 'react';

import Header from './views/partials/Header';
import Fotos from './views/Fotos';
import Themen from './views/Themen';
import Kontakt from './views/Kontakt';
import Impressum from './views/Impressum';

import './App.css';

import Imgs from './model/imgs.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          h3='Hallo und ein herzliches Willkommen auf meiner Homepage.'
          passion={['Digitalnomade - ', 'Web-Developer - ', 'Crypto-Trader']}
        />
        <Fotos imgs={Imgs} />
        <Themen/>
        <Kontakt/>
        <Impressum/>
      </div>
    );
  }
}

export default App;
