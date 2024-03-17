/*
    title case problem. Cpitalise every starting word from the given sentence

    "hello world saquib" => "Hello World Saquib"
*/ 

const sentence = "hello world saquib";

function capitaliseEveryWord(str) {
    let capitaliseStatement = "";
    str = str.split(" ");
    str.forEach((element, i) => {
        capitaliseStatement += element.slice(0, 1).toUpperCase() + element.slice(1) + " ";
    });

    console.log(capitaliseStatement);
    return capitaliseStatement;
}

console.log(capitaliseEveryWord(sentence));