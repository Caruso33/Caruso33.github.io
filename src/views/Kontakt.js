import React, { Component } from 'react';

class Kontakt extends Component {
  render() {
    return (
      <div className='Kontakt'>

        <h4>Kontakt</h4>
        <ul class="wrapper">
          <li><a href="https://twitter.com/Caruso33"><i class="fab fa-twitter fa-2x"></i></a></li>
          <li><a href="https://www.facebook.com/tobias.lines/"><i class="fab fa-facebook-square fa-2x"></i></a></li>
          <li><a href="https://www.instagram.com/caruso333/"><i class="fab fa-instagram fa-2x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/tobias-lein%C3%9F-422306a9/"><i class="fab fa-linkedin fa-2x"></i></a></li>
          <li><a href="https://github.com/caruso33/"><i class="fab fa-github fa-2x"></i></a></li>
          <li><a href="https://www.youtube.com/user/caruso33/"><i class="fab fa-youtube fa-2x"></i></a></li>
          <li><a href="https://www.twitch.tv/caruso33/"><i class="fab fa-twitch fa-2x"></i></a></li>
          <li><a href='mailto:leinsst@web.de'><i class="fas fa-envelope fa-2x"></i></a></li>
        </ul>
      </div>
    );
  }
}

export default Kontakt;
