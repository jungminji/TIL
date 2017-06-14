(function(window) {
  "use strict";
  const doc = window.document;
  const showcase = {
    path: [],
    alt: [],
    number: 9,
    width: 900,
    height: 420
  };
  const thumbnail = {
    path: [],
    alt: [],
    width: 100,
    height: 100
  };

  // Storing path into showcase, thumbnail object
  (function() {
    for (let i = 0; i < showcase.number; i++) {

      showcase.path.push('https://unsplash.it/' + showcase.width + '/' + showcase.height + '?image=' + i);
      thumbnail.path.push('https://unsplash.it/' + thumbnail.width + '/' + thumbnail.height + '?image=' + i);

      showcase.alt.push('https://unsplash.it/' + showcase.width + '/' + showcase.height + '?image=' + i);
      thumbnail.alt.push('https://unsplash.it/' + thumbnail.width + '/' + thumbnail.height + '?image=' + i);

    }
  }());

  // Render list in ul#showcase-thumbnail
  (function() {

    let thumbnailList = doc.querySelector('#showcase-thumbnail');

    for (let i = 0; i < showcase.number; i++) {
      thumbnailList.innerHTML += '<li role="presentation"><a href="" class="photo-showcase-thumbnail" role="tab"><img src="https://unsplash.it/100/100?image=' + i + '" alt="' + thumbnail.alt[i] + '"></a></li>';
    }
  }());

  // Prevent default behavior of a links
  // And loading image before downloading actual image
  (function() {
    // querySelector works IE8+
    let thumbnailLinks = doc.querySelectorAll('.photo-showcase-thumbnail');

    function blockDefaultEvent(e) {

      let newPath = '';

      // currentSrc doesn't support IE. (require polyfill)
      // Loop through showcase path to find the matching index to retrieve thumbnail path
      for (let i = 0; i < showcase.path.length; i++) {
        let index = showcase.path[i].split('=')[1];
        if (e.target.currentSrc.split('=')[1] === index) {
          newPath = showcase.path[i];
        }
      }

      // show loading before downloading actual image
      let showcaseImg = doc.querySelector('.photo-showcase img');
      let downloadImg = new Image();

      // .src browser support unknown except Chrome
      showcaseImg.src = "loading.svg";
      downloadImg.onload = function() {
        showcaseImg.src = downloadImg.src;
      };
      downloadImg.src = newPath;

      return false;
    }

    for (let i = 0; i < showcase.number; i++) {
      thumbnailLinks.item(i).onclick = blockDefaultEvent;
    }
  }());

}(window));
