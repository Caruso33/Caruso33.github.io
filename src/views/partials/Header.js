import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { h3 } = this.props;
    const passion = this.props.passion.map((p, i) => (
      <span key={i}>{p}</span>
    ))
    return (
      <header className="Header">
        <h1 className="Title">Welcome to traveltobi.de</h1>
        <h2 className="small">Travel the world or die tryin'</h2>

        <h2>{passion}</h2>

        <h3>{h3}</h3>
      </header>
    );
  }
}

export default Header;
