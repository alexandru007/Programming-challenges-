
/*

Write a funtion that accepts a string as an input and returns
true if any permutation of the characters it contains forms a palindrome.

*/

function isPalindrome(inputString){
  
  let hashMap = {};
  let stringArray = inputString.split("");
  
  // create a hash map
  // count how many times each char appears
  stringArray.forEach(function(char){
    
    // char is not yet in the hashMap
    if (typeof(hashMap[char]) === "undefined"){
      hashMap[char] = 1;
    }
    
    // char present in the hashMap, increment by 1
    else {
      hashMap[char] += 1;
    }
  });
  
  // if you have odd chars more than 1 time, there is no way to 
  // have a palindrome
  let oddLetters = Object.values(hashMap).filter(value => value % 2 !== 0);
  
  if (oddLetters.length > 1) 
    return false;
  return true;
}