// secrets.js

 const apiKey = process.env.MY_SECRET_NAME;

export { apiKey };


function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; /
