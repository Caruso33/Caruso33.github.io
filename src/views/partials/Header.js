import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props){
    super(props)
  }
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
      <header className="header"
        style={
        {
          width: '60vw',
          margin: 'auto',
          textAlign: 'center'
        }
      } >
        <h1 className="title">Welcome to traveltobi.de</h1>
        <h2 className="small">Travel the world or die tryin'</h2>

        <h2 style= {
          {
            display: 'flex',
            justifyContent: 'space-between'
          }
        }>{passions}</h2>

        <h3>{h3}</h3>
      </header>
    );
  }
}

export default Header;
