var fibonacciSeries = function(n) {
  if (n === 2) {
    return [1, 1];
  } else {
    var s = fibonacciSeries(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacciSeries(4));
