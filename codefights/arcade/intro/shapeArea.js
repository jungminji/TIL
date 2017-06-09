function shapeArea(n) {

  var filled = 0;

  for (var i = 4; i > 0; i--) {
    for (var j = n - 1; j > 0; j--) {
      filled += j;
    }
  }
  return filled + 1;
}
