import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavItems from '../../model/NavItems';

class Navbar extends Component {
  render() {
    let navItems = NavItems.map(item => (
      <Link key={item}
        className = {item === 'Home'? 'active' : ""}
        to={ {pathname: `/${item.toLowerCase()}`}}>{item}
      </Link>
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
