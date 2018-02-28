import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Fotos.css';

class Fotos extends Component {
  static propTypes = {
    imgs: PropTypes.arrayOf(PropTypes.object)
                    .isRequired
  }
  render() {
    const {imgs} = this.props;

    return (
      <div className="fotos">
        {
          imgs.map((chapter, ind) => {
            return(
              <div className='fotoContent' key={chapter.title}>

                <h4>{chapter.title}</h4>

                  {chapter.data.map((album, ind) => {

                    return(

                      <div className='foto' key={album.albumTitle}>
                        <a href={album.albumsrc}>
                          <figure>
                            <img src={album.imgsrc} alt='' />
                            <figcaption>
                              {album.albumTitle}
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    );
                  })}
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Fotos;
