var mySqrt = function (x) {
  let square = 1;
  while (square * square <= x) square++;
  return square - 1;
};
