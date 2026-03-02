console.log(typeof 1234);
console.log(typeof 123456789n);
console.log(typeof "Hi");
console.log(typeof true);
console.log(typeof Symbol("id"));
console.log(typeof undefined);
console.log(typeof { name: "John" });
console.log(typeof function() {});

const value = null;
console.log(typeof value);
console.log(value === null);

console.log(typeof [1, 2, 3]);
console.log(Array.isArray([1,2,3]));