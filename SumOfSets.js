/*

check if any 2 numbers from an array form a given sum

Ex: 
array = [1, 2, 3] 
sum = 5, returns true, 5 = 2 + 3
sum = 55, returns false

*/

function sumOfSets(myArray, sum) {

    // foreach number in myArray substact the number 
    // from the sum and check if Set has the compliment
    // if Set has it means we have 2 numbers forming a sum
    let hashSet = new Set();

    for (let i = 0; i < myArray.length; i++) {
        if (hashSet.has(sum - myArray[i]))
            return true;
        else
            hashSet.add(myArray[i]);
    }

    // default result
    return false;
}

// test
console.log("Expect true, got: " + sumOfSets([1, 2], 3));
console.log("Expect false, got: " + sumOfSets([1, 2], 2));
console.log("Expect true, got: " + sumOfSets([1, 2, 5, 6], 11));
console.log("Expect true, got: " + sumOfSets([5, 5, 8, 9, 6], 14));
console.log("Expect true, got: " + sumOfSets([5, 5, 5, 5, 1], 6));
