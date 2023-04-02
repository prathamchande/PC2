// secrets.js

 const apiKey = process.env.MY_SECRET_NAME;

export * as { apiKey };


function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export * as {sayHi, sayBye}; 
