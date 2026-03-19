function multiply(a) {
  return function (b) {
    return a * b;
  };
}

//const multiply = a => b => a * b;//

console.log(multiply(5)(2));