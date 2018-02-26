import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fotos extends Component {
  // static defaultProps = {
  //   imgs: {
  //     title: 'Thailand Dezember 2017-...',
  //     data: {
  //         albumTitle: 'Thailand Pt.2 - I: Bangkok',
  //         albumsrc: 'https://photos.google.com/share/AF1QipNVILzr66D9pMK_Z12uvMwnQmNHniGqBbCye3IpTrgv0oclZbQl49i3boHbdGI8JA?key=STltb0RLWDFtUzhRQndzdmx1bS1lOG90dDczd013&source=ctrlq.org',
  //         imgsrc: 'https://lh3.googleusercontent.com/FHtq-1ZRxW_GmWvJKE__qGHSjnGyHRvcGpw3e6IkhC9uGILM0SK2TYcF2zpYec0ToFdj9myqo0MFiSknDMnwmfZ8-uJoys9RjpLjLrQkjeZo0pY67rLc5g4nhSbRJBU8Wnmbj45KFfQ'
  //       }
  //   }
  // }
  static propTypes = {
    imgs: PropTypes.arrayOf(PropTypes.object)
                    .isRequired
  }
  render() {
    const {imgs} = this.props;

    return (
      <div className="Fotos">
        {
          imgs.map((chapter, ind) => {
            return(
              <div className='FotoContent' key={chapter.title}>

                <h4>{chapter.title}</h4>

                  {chapter.data.map((album, ind) => {

                    return(

                      <div className='Foto' key={album.albumTitle}>
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

/**
 *
 const wrapperDiv = document.querySelector('#fotoContent');

for (albums of imgs) {

  let h4 = document.createElement('h4');
  h4.innerHTML = albums.title;
  wrapperDiv.appendChild(h4)
  let albumDivWrapper = document.createElement('div');
  albumDivWrapper.classList.add('albumWrapper')


  for (album of albums.data) {

    let contentDiv = document.createElement('div');
    let anchor = document.createElement('a');
    let fig = document.createElement('figure');
    let figCap = document.createElement('figcaption');
    let img = document.createElement('img');

    img.setAttribute('src', album.imgsrc);
    let imgOrientationClass = isPortrait(img) ? 'portrait' : 'horizontal';
    img.classList.add('imgThumbs', imgOrientationClass)
    contentDiv.classList.add('foto')
    figCap.classList.add('albumLinks')

    anchor.setAttribute('href', album.albumsrc);

    figCap.innerHTML += album.albumTitle;
    fig.appendChild(img)
    fig.appendChild(figCap)

    anchor.appendChild(fig)

    contentDiv.appendChild(anchor);
    albumDivWrapper.appendChild(contentDiv)
  }
  wrapperDiv.appendChild(albumDivWrapper);
  wrapperDiv.appendChild(document.createElement('hr'));
}

function isPortrait(img) {
  var w = img.naturalWidth || img.width,
      h = img.naturalHeight || img.height;
  return (h > w);
}

 */
