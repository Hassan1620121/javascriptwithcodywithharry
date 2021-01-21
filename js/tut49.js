console.log("This is tutorial 49 of javascript course");
//Character classes
let regex = /\wart/; //word character 0 _ or alphabets or numbers

regex = /\w+d1r/; // w+ means one or more word characters
regex = /\Wbhai/;               //Non word characters
regex = /\W+bhai/;               //\w+ means more than oneNon word characters
regex = /number \d999/;               //\d means digit
regex = /number \d+/;               //\d means more than one digit
regex = /\D999/;               //\D means more than one nondigit
regex = /\D+999/;               //\D+ means more than one more than one non digit
regex = /\ska number/;               //\s+ means match whitespace characters
regex = /\s+ka number/;               //\s+ means match whitespace characters
regex = /\Ska number/;               //\s+ means match whitespace characters
regex = /\S+ka number/;               //\s+ means match whitespace characters
regex = /4r5r\b/;               //\word boundary

//Assertions
regex = /h(?=y)/;
regex = /h(?!y)/;
str = "harh1456ji4r5r %%$@bhai hdka number 8999harry99999";  //Non word characters





let result = regex.exec(str);
console.log("The result from exec is", result);
if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not matches the expression ${regex.source}`
  );
}
