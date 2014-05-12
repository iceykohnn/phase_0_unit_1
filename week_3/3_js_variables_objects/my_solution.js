// I paired [by myself, with:] on this challenge.




// Pseudocode
// assign the value of secretNumber a number value
// change the value of secretNumber to 7
// make the value of password equal a string
// make the string value of password change to 'just open the door'
// make the value of allowedIn a boolean (meaning true or false)
// change allowedIn value to false
//assign the value of members to an array
// give the first value in the array members the value of john
// give the fourth value in the array members the value of mary


// __________________________________________
// Write your code below.

var secretNumber = 2
secretNumber = 7
password = "w00t"
password = 'just open the door'
var allowedIn = true
allowedIn = false
var members = []
members = ['john',]
members = ['John',]
members = ['Mary']



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// i had to change the value of ['john'] to ['John']
members =['John']
// i didn't focus and I accidently changed the value of John into the value of Mary
members = ['John',,,'Mary']


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// I was confused about this exercise at first, but that was because I was over thinking it. When I went back 
// and followed the instructions, I was ok. The hardest thing to do turned into not just fixing my mistakes. I 
// was tempted to edit my work and put in the correct answer with out having anything to put into the refactored
// area.  But I think that I am getting the hang of this pseudocode thing. 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

