import React, { Component } from 'react';
import './Navbar.css';
import NavItems from '../../model/NavItems';

class Navbar extends Component {
  render() {
    let navItems = NavItems.map(item => (
      <a key={item}
        className = {item === 'Home'? 'active' : ""}
        href={`#${item.toLowerCase()}`}>{item}
      </a>
    ) )
    return (
      <header>
        <nav>
          <h1 style={
            {
              textTransform: 'uppercase',
              display: 'inline-block'
            }
          }>traveltobi.de</h1>
          <div className="nav-wrapper">
            {navItems}
          </div>
          <div id="hamburger"><i className="fas fa-bars fa-2x"></i></div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
