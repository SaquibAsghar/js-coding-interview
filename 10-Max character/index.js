/*
    Find the maximum character from the string

    "aabbccccddd => "c"
*/ 

const str = "aabbccccddde";

function maxCharacter(str){
    let charMap = {};
    let charCount = 0, char = "";
    for (let char of str) {
       charMap[char] = charMap[char] + 1 || 1;
    };
    for (const key in charMap) {
        if (charMap[key] >= charCount) {
            char = key;
            charCount = charMap[key]
        }
    }
    return char
}

console.log(maxCharacter(str));