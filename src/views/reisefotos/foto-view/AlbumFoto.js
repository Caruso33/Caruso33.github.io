import React, { Component } from 'react';
import './AlbumFoto.css';

class Fotos extends Component {
  render() {
    const {album} = this.props;
    return (
      <div className='foto' key={album.albumTitle}>
        <a href={album.albumsrc}>
          <figure>
            <img src={album.imgsrc} alt={album.albumTitle + "Fotoalbum"} />
            <figcaption>
              {album.albumTitle}
            </figcaption>
          </figure>
        </a>
      </div>
    );
  }
}

export default Fotos;
