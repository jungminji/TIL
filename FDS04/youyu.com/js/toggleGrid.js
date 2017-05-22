/*! toggleGrid.js */

let doc = document.body;

toggleGrid = (e) => {
  if(e.keyCode === 71 && e.shiftKey){
    doc.classList.toggle('show-grid');
  }
}

doc.addEventListener('keyup', toggleGrid);
