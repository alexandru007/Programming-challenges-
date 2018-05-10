class MostCommon
    {
        public static string Solution(string s)
        {
            // return empty if input is empty
            if (String.IsNullOrWhiteSpace(s))
                return "";

            // to count each char
            Dictionary<string, int> dict = new Dictionary<string, int>();

            foreach (var charater in s)
            {
                if (dict.ContainsKey(charater.ToString()))
                    dict[charater.ToString()] += 1;
                else
                    dict[charater.ToString()] = 1;
            }

            int max = dict.Values.ToList().Max();

            return dict.FirstOrDefault(kvp => kvp.Value == max).Key;

        }
    }
