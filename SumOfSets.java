/*

check if any 2 numbers from an array form a given sum

Ex: 
array = [1, 2, 3] 
sum = 5, returns true, 5 = 2 + 3
sum = 55, returns false

*/

public class SumOfSets {
    
    public static boolean Solution(int[] myArray, int sum){
        
        // hashset to hold potential compliments
        HashSet hSet = new HashSet();
        
        // loop over array, check if you have a sum, return true
        // else keep looking
        for(int number : myArray){
            
            if (hSet.contains(sum - number)) {
                return true;
            }
            else{
                hSet.add(number);
            }
        }
        return false;
    }
}