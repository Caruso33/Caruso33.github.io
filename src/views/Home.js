import React, { Component } from 'react';

import Navbar from './partials/Navbar';
import Title from './partials/Title';
// import TestForm from './testForm';
import FotoList from './reisefotos/FotoList';
import Themen from './Themen';
import Kontakt from './Kontakt';
import Impressum from './Impressum';
import Footer from './partials/Footer';
import './Home.css';


export default class Home extends Component {

  render() {
    // {this.props.children}
    return (
      <div className="app">
        <Navbar />
        <main>
          <Title />
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
