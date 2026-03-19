const sum = (function () {
  let total = 0;

  return function (num) {
    total += num;
    return total;
  };
})();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7)); 