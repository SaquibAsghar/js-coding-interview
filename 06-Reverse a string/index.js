/*

    to reverse a string
    "Hello World     Saquib" => "Saquib World Hello"

*/

const string = 'Hello World     Saquib';

function getReversedString(str) {
    str = str.trim();
    const chars = str.split('');
    let revString = '';
    let newString = '';
    for (let i = 0; i < chars.length; i++) {
        if (chars[i].trim() !== '') {
            revString += chars[i]
        } else {
            newString = chars[i] + revString + newString;
            revString = "";
        }
        
    }
    newString = revString + newString;
    return newString;
}

console.log(getReversedString(string));
