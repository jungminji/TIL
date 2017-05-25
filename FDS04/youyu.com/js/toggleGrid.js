/*! toggleGrid.js */

let doc = document.body;

toggleGrid = (e) => {
  if(e.keyCode === 71){
    doc.classList.toggle('grid-guide');
  }
}


doc.addEventListener('keyup', toggleGrid);
