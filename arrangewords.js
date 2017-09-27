var string = prompt("Enter between 2 and 12 words, with each word separated by a comma");
var textArr=string.split(",", 12);
textArr.sort(); 
alert("The words in alphabetical order:  " + textArr.join(' ',));