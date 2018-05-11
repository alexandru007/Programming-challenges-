// check if any permutations of a string is a palindrome

public class PalindromPermutation {
    
    // explanation: a palindrome has to have even number of each char + optional an aditional character
    // if string has 1 char return true, else
    // sort the string aba -> aab
    // if len is odd, ignore the last char
    // compare the pairs, return false if any are different
    
    public static boolean Solution(String str){
        
        // if len 1, string is a palindrome
        if (str.length() == 1){
            return true;
        }
        
        // convert the string to array of char
        char[] charArray = str.toCharArray();
        
        // sort the array
        Arrays.sort(charArray);
        
        // a palindrome can be formed with an odd number of chars ex: "aba"
        int arrayLen = (charArray.length % 2 == 0) ? charArray.length : charArray.length - 1;
        
        for (int i = 0; i < arrayLen; i += 2) {
            if (charArray[i] != charArray[i + 1]) {
                return false;
            }
        }

        return true;
    }   
}
