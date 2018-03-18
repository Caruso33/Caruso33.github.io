import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.css';

class Title extends Component {
  // constructor(props){
  //   super(props)
  // }
  static defaultProps = {
    passionsList: ['Digitalnomade', 'Web-Developer', 'Crypto-Trader']
  }
  static propTypes = {
    passionsList: PropTypes.arrayOf(PropTypes.string)
                            .isRequired
  }
  render() {
    const { h3 } = this.props;
    const passions = this.props.passionsList.map((passion, i) => (
      // console.log(passion)
      <span key={i}>{passion}</span>
    ));

    return (
      <section className="title">
        <h1 className="title-h1">Welcome to traveltobi.de</h1>
        <h2 className="small">Travel the world or die tryin'</h2>

        <h2 style= {
          {
            display: 'flex',
            justifyContent: 'space-around'
          }
        }>{passions}</h2>

        <h3>{h3}</h3>
      </section>
    );
  }
}

export default Title;
