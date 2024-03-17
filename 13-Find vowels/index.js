/*
   Find count of vowels used in the string

   "saquib asghar" => 5
   "holla World" => 3
*/

const statement = "Saquib";
const vowels = ["a", "e", "i", "o", "u"];
function findTheVowelsCount(str) {
  let count = 0;

  for (const char of str) {
    vowels.includes(char.toLowerCase()) && ++count;
  }

  return count;
}

console.log(findTheVowelsCount(statement));
