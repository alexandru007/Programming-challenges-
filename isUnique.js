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

    // for char 'A' with dev value 65, array will have the value of 1 at the index of 65
    let testArray = [];

    for (let i = 0; i < str.length; i++) {

        // check if the char already is in array, if yes means there is a duplicate
        if(testArray[str.charCodeAt(i)] == 1)
            return false;
        else // char is not in the array, mark it as 1
            testArray[str.charCodeAt(i)] = 1;
    }
    return true;
}

console.log(isUnique("aab"));
