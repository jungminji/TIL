$(() => {
  // Testing code
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


  $(window).keyup((e) => {

    if (e.keyCode === 81) {
      for (key in myMenu) {
        myMenu[key].toggle();
      }
      for (key in quickMenu) {
        quickMenu[key].toggle();
      }
    }

    if (e.keyCode === 87) {
      $('section').toggleClass('component-bg-color');
      $('header').toggleClass('component-bg-color')
      $('footer').toggleClass('component-bg-color')
    }

  })


  // Favorite button
  $('.btn-favorite').on('click', (e) => {
    $(e.currentTarget).toggleClass('active');
  })

  // Rate button
  $('.item-rate button').on('click', (e) => {

    let btn = $(e.currentTarget);
    if (btn.is(':first-child')) {
      btn.toggleClass('rated');
    } else {
      if (btn.hasClass('rated')) {
        btn.nextAll().removeClass('rated');
        btn.addClass('rated');
      } else {
        btn.toggleClass('rated');
        btn.prevAll().addClass('rated');
      }
    }


    // $(e.currentTarget).toggleClass('rated');
    //
    // console.log($(e.currentTarget).index());
  })


})
