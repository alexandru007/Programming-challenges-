/*
check if characters in a string are all unique
use only array as a data structure
*/

// a non extented ASCII teble has characters starting 
// from 33 up to 127 dec value ('space' not included)
// if a string length is grater than (127-33) we have some duplicate chars return false
// if  string length == 0, we have empty string return false

function isUnique(str){

    // empty or too long to have all chars unique
    if (str.length == 0 || str.length > (127 - 33))
        return false;

    let testArray = [];

    for (let i = 0; i < str.length; i++) {

        if(testArray[str.charCodeAt(i)] == 1)
            return false;
        else
            testArray[str.charCodeAt(i)] = 1;
    }
    return true;
}

console.log(isUnique("aab"));

//console.log("abc".charCodeAt(0));