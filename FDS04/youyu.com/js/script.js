$( () => {

  // Grid Layout
  $(window).keyup( (e) => {
    if(e.keyCode === 71){
      $('body').toggleClass('grid-guide');
    }
    if(e.keyCode === 75){
      $('.signup').hide();
      $('.signin').hide();
      $('.username').css('display','block');
      $('.cart').css('display','block');
      $('.alarm').css('display','block');
    }
    if(e.keyCode === 76){
      $('.signup').css('display','block');
      $('.signin').css('display','block');
      $('.username').hide();
      $('.cart').hide();
      $('.alarm').hide();
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
