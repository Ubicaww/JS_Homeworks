const N = +prompt('Please enter number');

for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    console.log(i);
  }
}