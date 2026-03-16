const user = {
  name: 'John',
  age: 22,
  city: 'Kyiv',
  email: 'test@gmail.com',

  getInfo() {
    console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}, Email: ${user.email}`);
  }
};

user.getInfo();