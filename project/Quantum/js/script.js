// Toggle Controls
$(document).keypress(function(e) {
  var keycode = (e.keyCode ? e.keyCode : e.which);
  if (keycode === 100) {
    $("header").toggleClass("draw-border");
    $(".path").toggleClass("draw-border");
    $(".mailbox").toggleClass("draw-border");
    $("tr").toggleClass("draw-border");
    $("td").toggleClass("draw-border");
    $("th").toggleClass("draw-border");
    $("body").toggleClass("body-pad-bot");
  }
})
