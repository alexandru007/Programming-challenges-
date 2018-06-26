
// loop over a string expression 
// if char is an open bracket push to stack 
// if char is a closed braket
// pop an element from stack and compare to see if they form a pair
// if nothing to pop not balanced
// if stack is not empty by after looping over the whole string means not balanced

// NOTE: pop() method removes the last element from array (stack)

const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
};

function isBalanced(inputExp) {

    var stack = [];

    inputExpArray = inputExp.split(''); // convert the string to array of chars to use forEach method
    
    inputExpArray.forEach(function(element) {

        // if open bracket push to stack
        if ("([{".includes(element))
            stack.push(element);
            
        // if element is a closed bracket, pop from stack, 
        // compare popped char with the current element and see if they form a pair
        if(")]}".includes(element) && stack.length != 0)
            return (element === pairs[stack.pop()]);

    });

    // lastly check if the stack is empty, if yes it is balanced
    return stack.length == 0;

  }

  console.log(isBalanced("{}[]()"));
  console.log(isBalanced("{([])}"));
  console.log(isBalanced("var bla = isBla('notBla'){}"));
