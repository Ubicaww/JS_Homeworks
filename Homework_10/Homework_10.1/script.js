function sumSalaries(dept) {
  if (Array.isArray(dept)) {
    return dept.reduce((sum, person) => sum + person.salary, 0);
  } else {
    let sum = 0;

    for (let subDept of Object.values(dept)) {
      sum += sumSalaries(subDept);
    }
    return sum;
  }
}

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 }
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 }
    ],
    internals: [{ name: "Jack", salary: 1300 }]
  }
};

console.log(sumSalaries(company));