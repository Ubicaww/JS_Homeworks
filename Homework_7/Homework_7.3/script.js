function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);

      i--;
    }
  }
}

const array = [1, 3, 4, 6, 2, 5, 4, 7, true, "hello", null, undefined, 4, 4];
removeElement(array, 4);

console.log(array);