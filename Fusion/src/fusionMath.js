const fusionMath = {
  factorial: function(n) {
    if (n === 1) {
      return 1;
    }
    return n * M.factorial(--n);
  }
}

export default fusionMath;
