const num = +prompt('Please enter number');
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
  }
}

if (num <= 1) {
  console.log('The number is not prime');
} else if (isPrime) {
  console.log('The number is prime');
} else {
  console.log('The number is not prime');
}