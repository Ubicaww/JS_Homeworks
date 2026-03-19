function enterNumber() {
  let lastValue;
  let isValid = false;

  for (let i = 0; i < 10; i++) {
    let input = prompt("Enter a number greater than 100");

    if (input === null) return;

    let num = +input;
    lastValue = input;

    if (num > 100) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    console.log(lastValue);
  }
}

enterNumber();