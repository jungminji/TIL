function makeArrayConsecutive2(statues) {
  var max = Math.max.apply(null, statues);
  var min = Math.min.apply(null, statues);

  return (max - min - 1) - (statues.length - 2);
}
