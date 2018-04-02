import React, { Component } from 'react';
import SectionHeader from './partials/SectionHeader';
// require('./acuityscheduling-embed');

import './Kontakt.css';

class Kontakt extends Component {
  render() {
    return (
      <section className="kontakt">
        <SectionHeader sectionTitle="Kontakt" className="sectionHeader" />
        <ul className="wrapper">
          <li>
            <a href="https://twitter.com/Caruso33">
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/hrefbias.lines/">
              <i className="fab fa-facebook-square fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/caruso333/">
              <i className="fab fa-instagram fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hrefbias-lein%C3%9F-422306a9/">
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/caruso33/">
              <i className="fab fa-github fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/caruso33/">
              <i className="fab fa-youtube fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/caruso33/">
              <i className="fab fa-twitch fa-2x" />
            </a>
          </li>
          <li>
            <a href="mailhref:leinsst@web.de">
              <i className="fas fa-envelope fa-2x" />
            </a>
          </li>
        </ul>
        <a
          href="https://app.acuityscheduling.com/schedule.php?owner=14788871"
          target="_blank"
          class="acuity-embed-button"
        >
          Schedule Appointment
        </a>
        {/* <link
          rel="stylesheet"
          href="https://embed.acuityscheduling.com/embed/button/14788871.css"
          id="acuity-button-styles"
        /> */}
        {/* <script
          src="https://embed.acuityscheduling.com/embed/button/14788871.js"
          async
        /> */}

        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=14788871"
          width="100%"
          height="800"
          frameBorder="0"
        />
        {/* <script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script> */}
      </section>
    );
  }
}

export default Kontakt;
