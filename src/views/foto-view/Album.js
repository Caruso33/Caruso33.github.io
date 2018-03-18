import React, { Component } from 'react';
import './Album.css';
import AlbumFoto from './AlbumFoto';

export default class Album extends Component {
  render(){
    const {chapter} = this.props;
    return(
      <div className='album' key={chapter.title}>

        <h4>{chapter.title}</h4>
        { chapter.data.map(album => <AlbumFoto key={album.albumTitle} album={album} />) }
      </div>
    );
  }
}
