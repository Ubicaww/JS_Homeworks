function averageNumber(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] === "number" ||
      (typeof arr[i] === "string" && !isNaN(arr[i]))
    ) {
      sum += Number(arr[i]);
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}

const mixedArray = [20, "20", null, undefined, {}, [], 7, "hello", true, false];
console.log(averageNumber(mixedArray));