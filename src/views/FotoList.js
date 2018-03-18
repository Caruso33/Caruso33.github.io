import React, { Component } from 'react';
import './FotoList.css';
import Album from './foto-view/Album';
import SectionHeader from './partials/SectionHeader'
import Imgs from '../model/Imgs';

export default class Fotos extends Component {

  render(){
    return(
      <section className="album-wrapper">
        <SectionHeader sectionTitle='Reisefotoalben' className='sectionHeader' />
        { Imgs.map(chapter =>  <Album key={chapter.title} chapter={chapter} />) }
      </section>
    )
  }
}
