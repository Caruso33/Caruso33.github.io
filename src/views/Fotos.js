import React, { Component } from 'react';

class Fotos extends Component {
  render() {
    return (
      <div className="Fotos">

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
