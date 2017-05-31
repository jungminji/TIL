$(() => {
  
  cubeEvent("front");
  cubeEvent("back");
  cubeEvent("left");
  cubeEvent("right");
  cubeEvent("top");
  cubeEvent("bottom");

  visibilityEvent();
});

// Event function: btn-"dimension"
cubeEvent = (dimension) => {
  $(".btn-" + dimension).on("click", () => {
    $(".cube").removeAttr("class").addClass("cube show-" + dimension);
  });
};

visibilityEvent = () => {
  $(".btn-backface").on("click", () => {
    $(".cube div").toggleClass("backface");
  });
};
