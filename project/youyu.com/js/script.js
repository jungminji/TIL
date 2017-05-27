$( () => {

  let body = $('body');

  let myMenu = {
    signUp: $('.sign-up'),
    username: $('.username')
  };

  let quickMenu = {
    signIn: $('.sign-in'),
    cart: $('.cart'),
    alarm: $('.alarm')
  };


  $(window).keyup( (e) => {

    if(e.keyCode === 81){
      for(key in myMenu){
        myMenu[key].toggle();
      }
      for(key in quickMenu){
        quickMenu[key].toggle();
      }
    }

    if(e.keyCode === 87){
      $('section').toggleClass('component-bg-color');
      $('header').toggleClass('component-bg-color')
    }

  })

})
