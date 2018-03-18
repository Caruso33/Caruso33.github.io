import React, { Component } from 'react';
import Navbar from './views/partials/Navbar';
import Title from './views/partials/Title';
// import TestForm from './views/testForm';
import FotoList from './views/reisefotos/FotoList';
import Themen from './views/Themen';
import Kontakt from './views/Kontakt';
import Impressum from './views/Impressum';
import Footer from './views/partials/Footer';
import Greetings from './model/Greetings';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { greeting: 'Willkommen' }

    let greetingInterval = setInterval(() => {
      const randGreet = Math.floor( Math.random() * Greetings.length );
      this.setState( { greeting: Greetings[randGreet] } )
    }, 3000);
  }
  render() {
    let greet = `Hallo und ein herzliches ${this.state.greeting} auf meiner Homepage`;
    return (
      <div className="app">
        <Navbar />
        <main>
          <Title h3={greet} />
          <FotoList />
          <Themen/>
          <Kontakt/>
          <Impressum/>
        </main>
        <Footer footer='Footer'/>
      </div>
    );
  }
}

export default App;
