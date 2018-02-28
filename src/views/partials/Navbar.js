import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      navItems: ['Home','Contact', 'About',  'Blog']
    };
  };
  render() {
    const navItems = this.state.navItems.map((item, ind) => (
      <a
        key={ind}
        className = {item === 'Home'? 'active' : ""}
        href={'#'+item.toLowerCase()}>{item}
      </a>
    ) )
    return (
      <header style={ {marginBottom: '50px'} }>
        <nav>
          <h1 style={
            {
              textTransform: 'uppercase',
              display: 'inline-block'
            }
          }>traveltobi.de</h1>
          <div>
            {navItems}
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
