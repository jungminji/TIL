$( () => {

  // Grid Layout
  $(window).keyup( (e) => {
    if(e.keyCode === 71){
      $('body').toggleClass('grid-guide');
    }
  })

  // Filter toggle
  $('.filter-age dd').click( (e) => {
    FavBtnToggle(e);
  })
  $('.filter-style dd').click( (e) => {
    FavBtnToggle(e);
  })

  // Favorite Button Toggle
  $('.btn-favorite').click( (e) => {
    FavBtnToggle(e);
  })

})


function FavBtnToggle(e) {
  $(e.currentTarget).toggleClass('active');
}
