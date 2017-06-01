// jQuery
$(() => {

  cubeEvent("front");
  cubeEvent("back");
  cubeEvent("left");
  cubeEvent("right");
  cubeEvent("top");
  cubeEvent("bottom");

  backfaceEvent();
});

// Event function: btn-"dimension"
cubeEvent = (dimension) => {
  $(".btn-" + dimension).on("click", () => {
    $(".cube").removeAttr("class").addClass("cube show-" + dimension);
  });
};

// Event function: btn-backface
backfaceEvent = () => {
  $(".btn-backface").on("click", () => {
    $(".cube div").toggleClass("backface");
  });
};
