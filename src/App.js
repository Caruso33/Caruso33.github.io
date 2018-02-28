import React, { Component } from 'react';

import Navbar from './views/partials/Navbar';
import Header from './views/partials/Header';
import TestButton from './views/testButton';
import Fotos from './views/Fotos';
import Themen from './views/Themen';
import Kontakt from './views/Kontakt';
import Impressum from './views/Impressum';
import Footer from './views/partials/Footer';

import './App.css';

import Imgs from './model/imgs.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      greeting: 'Willkommen'
    }
    setTimeout(() => {
      const greetings = ['Bongiorno', 'Hola', 'Buenos Dias'];
      const randGreet = Math.floor(
        Math.random() *
        greetings.length
      );
      this.setState(
        {
          greeting: greetings[randGreet]
        }
      )
    }, 3000);
  }
  render() {
    let greet = `Hallo und ein herzliches ${this.state.greeting} auf meiner Homepage`;
    return (
      <div className="app">
        <Navbar />
        <Header
          h3={greet}
          // passionsList={this.props.passionsList}
        />
        <TestButton/>
        <Fotos imgs={Imgs} />
        <Themen/>
        <Kontakt/>
        <Impressum/>
        <Footer footer='Footer'/>
      </div>
    );
  }
}

export default App;
