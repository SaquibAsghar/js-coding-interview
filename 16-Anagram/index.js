/*
    find whether the given 2 wordd are anagram
    Check to see if two provided strings are anagrams of eachother.
    One string is an anagram of another if it uses the same characters
    in the same quantity. Only consider characters, not spaces
    or punctuation.  Consider capital letters to be the same as lower case
    --- Examples
    anagrams('coding money', 'money coding') --> True
    anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    anagrams('Hi there', 'Bye there') --> False
*/

const string1 = "Hi there";
const string2 = "Bye there";
function isAnagrams(str1, str2) {
  const str1Map = {};
  const str2Map = {};

  str1 = str1.toLowerCase().replace(/[\W]/g, "");
  str2 = str2.toLowerCase().replace(/[\W]/g, "");

  for (const char of str1) {
    str1Map[char] = str1Map[char] + 1 || 1;
  }

  for (const char of str2) {
    str2Map[char] = str2Map[char] + 1 || 1;
  }

  if (Object.keys(str1Map).length !== Object.keys(str2Map).length) return false;

  for (let char in str1Map) {
    if (str1Map[char] !== str2Map[char]) return false;
  }

  return true;
}

console.log(isAnagrams(string1, string2));
