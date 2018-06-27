
// loop over a string expression 
// if char is an open bracket push to stack 
// if char is a closed braket
// pop an element from stack and compare to see if they form a pair
// if nothing to pop not balanced
// if stack is not empty by after looping over the whole string means not balanced


const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
};

function isBalanced(inputExp) {

    var stack = [];

    inputExpArray = inputExp.split(''); // convert the string to array of chars to use forEach method
    
    for (var i = 0; i < inputExpArray.length; i++){

      var element = inputExpArray[i];
        // if open bracket push to stack
        if ("([{".includes(element)){
          stack.push(element);
        }
 
        // if element is a closed bracket and stack is empty not balanced
        // if element is a closed bracket and popped element do not form a pair not balanced
        if(")]}".includes(element)){

          if (stack.length == 0){
            return false;
          }
          
          if (element != pairs[stack.pop()]) {
            return false;
          }
            
        }
    }

    // lastly check if the stack is empty, if yes it is balanced
    return stack.length == 0;

  }

  console.log(isBalanced("{}[]()"));
  console.log(isBalanced("{([])}"));
  console.log(isBalanced("var bla = isBla('notBla'){}"));
