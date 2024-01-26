// Written by: Ashley Colbert
// Written on: January 25, 2024

//generate-password is a npm package which allows you to use to automatically generate passwords. You can enter your own criteria specifying password length. and using booleans to determine which characters and cases you would like included in the passwords.

const date = require('date-fns');
const generator = require('generate-password');

//The following function will create a user and print the information to the console. It will take a username as a parameter, then use generate-password to create a random password using specified parameters, and use date-fns module to print the date the user was created in the specified format(MM/dd/yyyy).


function createUser(userName) {
  //date-fns will use take the current date and format it as specified.
  const currentDate = date.format(new Date(), "MM/dd/yyyy");

  // generate-password will produce a random 8 character password containing at least one uppercase letter, one number, one special symbol, and will exclude any similar characters( ex. i and 1) to prevent confusion.
  const password = generator.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
    strict: true
  });

  //console.log uses a template literal to print all the new users information to the console. Note the username will be added when the function is called.
console.log(`New User Information
  Username: ${userName}
  Password: ${password}
  Account created: ${currentDate}`)
return password
}


//This example will generate multiple passwords at once using the same criteria. In this case all passwords will be 10 characters long consisting of only letters and number, and at least one of the letters will be uppercase. They will be printed to the console as an array.


function createMultiPasswords() {
  const multiPasswords = generator.generateMultiple(10, {
    length: 10,
    uppercase: true,
    numbers: true
  });
console.log(multiPasswords)
return multiPasswords
}

// The createUser() function is called with the username added as a parameter.
createUser('JSmith')

//The createMultiPasswords() function is called. 
createMultiPasswords()

