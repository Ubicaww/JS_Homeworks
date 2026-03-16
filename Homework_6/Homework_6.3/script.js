const book = {
  contacts: [
    {
      name: 'User1',
      phone: '+380111111111',
      email: 'user1@gmail.com'
    },
       {
      name: 'User2',
      phone: '+380222222222',
      email: 'user2@gmail.com'
    },
       {
      name: 'User3',
      phone: '+380333333333',
      email: 'user3@gmail.com'
    }
  ],

  findContact(name) {
    return book.contacts.find(contact => contact.name === name);
  },

  addContact(name, phone, email) {
    book.contacts.push({
      name: name,
      phone: phone,
      email: email
    });
  }
};

book.addContact('User4', '+380444444444', 'user4@gmail.com');
console.log(book.contacts)
console.log(book.findContact('User2'));