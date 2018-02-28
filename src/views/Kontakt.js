import React, { Component } from 'react';

class Kontakt extends Component {
  render() {
    return (
      <div className='kontakt'>

        <h4>Kontakt</h4>
        <ul className="wrapper">
          <li><a href="https://twitter.com/Caruso33"><i className="fab fa-twitter fa-2x"></i></a></li>
          <li><a href="https://www.facebook.com/tobias.lines/"><i className="fab fa-facebook-square fa-2x"></i></a></li>
          <li><a href="https://www.instagram.com/caruso333/"><i className="fab fa-instagram fa-2x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/tobias-lein%C3%9F-422306a9/"><i className="fab fa-linkedin fa-2x"></i></a></li>
          <li><a href="https://github.com/caruso33/"><i className="fab fa-github fa-2x"></i></a></li>
          <li><a href="https://www.youtube.com/user/caruso33/"><i className="fab fa-youtube fa-2x"></i></a></li>
          <li><a href="https://www.twitch.tv/caruso33/"><i className="fab fa-twitch fa-2x"></i></a></li>
          <li><a href='mailto:leinsst@web.de'><i className="fas fa-envelope fa-2x"></i></a></li>
        </ul>
      </div>
    );
  }
}

export default Kontakt;
