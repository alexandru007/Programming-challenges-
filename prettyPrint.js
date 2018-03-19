/*
A common feature of phone number input boxes on web forms is pretty printing - for example, when a user enters "9165551234", what gets displayed is "(916) 555-1234".

Write a function called prettyPrint() that takes a string of digits, and meets the following conditions:

1) If there are exactly 10 digits, return a pretty printed version of the digits, as in "(XXX) XXX-XXXX".
2) Otherwise, return the digits as is.

*Extra Credit*

Enable the function to ignore any non-numeric characters in the input string.

*/

function prettyPrint(numString) {
    // Your solution here
    let phoneNumber = "";

    for (let i = 0; i < numString.length; i++) {
        // ascii value for numbers = 48 - 57
        if (numString.charCodeAt(i) >= 48 && numString.charCodeAt(i) <= 57) {
            phoneNumber = phoneNumber + numString.charAt(i);
        }
    }

    if (phoneNumber.length != 10)
        return phoneNumber;
    else {
        let first3 = phoneNumber.slice(0, 3),
            middle3 = phoneNumber.slice(3, 6),
            last4 = phoneNumber.slice(6, 10);

        return ("(" + first3 + ") " + middle3 + "-" + last4);
    }
}

// Test Cases

const testCases = {
  '9': '9',
  '916': '916',
  '916555': '916555',
  '9165551234': '(916) 555-1234',
  '91655512345': '91655512345'
};

Object.keys(testCases).forEach((input) => {
  const result = prettyPrint(input),
    expected = testCases[input];
  
  if (result === expected) {
    console.log(`The function passed for the input ${input}`);
    console.log('\n');
  } else {
    console.log(`The function failed for the input ${input}`);
    console.log(`Expected: ${expected}, Actual: ${result}`);
    console.log('\n');
  }
});

// Extra Credit Test Cases, uncomment to run
const extraTestCases = {
  '9a': '9',
  '916a?': '916',
  'asdpoiu  asdk 916555 sdk***': '916555',
  'IGNORED_CHARACTERS**9165551234  **IGNORED**': '(916) 555-1234',
  '#$%^&916%^&55512^&U*345$%^&': '91655512345'
};

console.log('*** EXTRA CREDIT ***');
console.log('\n');
Object.keys(extraTestCases).forEach((input) => {
  const result = prettyPrint(input),
    expected = extraTestCases[input];
  
  if (result === expected) {
    console.log(`The function passed for the input ${input}`);
    console.log('\n');
  } else {
    console.log(`The function failed for the input ${input}`);
    console.log(`Expected: ${expected}, Actual: ${result}`);
    console.log('\n');
  }
});
