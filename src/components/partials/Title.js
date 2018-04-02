import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Greetings from '../../model/Greetings';

import './Title.css';

class Title extends Component {
  constructor(props){
    super(props);

    this.state = { greeting: 'Willkommen' }

    setInterval(() => {
      const randGreet = Math.floor( Math.random() * Greetings.length );
      this.setState( { greeting: Greetings[randGreet] } )
    }, 3000);
  }
  static defaultProps = {
    passionsList: ['Digitalnomade', 'Web-Developer', 'Crypto-Trader']
  }
  static propTypes = {
    passionsList: PropTypes.arrayOf(PropTypes.string)
                            .isRequired
  }
  render() {
    const passions = this.props.passionsList.map((passion, i) => (
      <span className="passions" key={passion}>{passion}</span>
    ));

    return (
      <section className="title">
        <h2 className="title-h2">Welcome to traveltobi.de</h2>
        <h2 className="small">Travel the world or die tryin'</h2>

        <h2 className="title-passions">{passions}</h2>

        <h3>Hallo und ein herzliches <span className="greeting">{this.state.greeting}</span> auf meiner Homepage</h3>
      </section>
    );
  }
}

export default Title;
