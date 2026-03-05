const userName = prompt('Please enter your name');
const formattedName = `${userName[0].toUpperCase()}${userName.slice(1)}`;
alert(`Hello, ${formattedName}! How are you?`);