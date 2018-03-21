import React, { Component } from 'react';
import SectionHeader from './partials/SectionHeader';
import './Impressum.css';

class Impressum extends Component {
  render() {
    return (
      <section className='impressum'>
        <SectionHeader sectionTitle='Impressum' className='sectionHeader' />

        <h4>Impressum laut §5 TMG</h4>
        <ul>
          <li>Tobias Leinss</li>
          <li>Lorcher Strasse 36</li>
          <li>73033 Göppingen</li>
          <li>Germany</li>
        </ul>
      </section>
    );
  }
}

export default Impressum;
