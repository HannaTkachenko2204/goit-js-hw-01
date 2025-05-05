function makeMessage(username) {
	console.log(`Hello ${username}`);
}

makeMessage("Jacob");

// function multiply(x, y, z) {
//     console.log(`Result: ${x * y * z}`);
//   }
  
  console.log("Log before multiply execution");
  multiply(2, 3, 5); // "Result: 30"
  console.log("Log after multiply execution");

  function multiply(x, y, z) {
	const product = x * y * z;
}

// const result = multiply(2, 3, 5);
// console.log(result);