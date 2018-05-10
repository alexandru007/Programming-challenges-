public class MostCommon {
    
    public static Character Solution(String s)
    {
        // check if string is empty
        if (!s.isEmpty())
        {
            // create a hasmap to store the chars and their occurence
            HashMap<Character, Integer> hm = new HashMap<>();
            
            // loop over the string and add/put each key value pair into the HashMap
            for (char letter : s.toCharArray()) 
            {
                // if we have a char -> increment the key
                if (hm.containsKey(letter))
                {
                    hm.put(letter, hm.get(letter) + 1);
                }
                // otherwise let the key be 1 
                else
                {
                    hm.put(letter, 1);
                }
            }
            
            // get the max occurance
            Integer max = Collections.max(hm.values());
            
            // find the first char that has the max value
            for (Character c : hm.keySet())
            {
                if (hm.get(c) == max)
                {
                    return c;
                }
            }
        }
        return ' ';
    }
}
