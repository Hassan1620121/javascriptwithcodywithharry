console.log("This is tutorial 48");

// Regular Expressions 
//Basic functions

//Meta character symbols
// const regex = /^h/;
//Character Sets - we use []

let regex = /h[aty]rry/;  //Can be a, to or y
 regex = /h[a-z]rry/;  //Can be any character from a to z
 regex = /h[aty]rry/;  //Can be any character from a to z
 regex = /h[^aty]rry/;  //Cannot be any of character from a to z
 regex = /h[^aty]rr[yYUu]/;  //Can be any character from a to z + can be u or y
 regex = /h[a-zA-Z]rr[yu0-9][0-9]/;  //We can have as many charaacter sets as we want
 //Quantifiers
 regex = /har{2}y/; // r can occur exactly 2 times
 regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

 //Groupings - we use paranthesis for groupings ()

 regex = /(har){2}/;
 regex = /(har){2}([0-9]r){3}/;
 
  str = "harrry bhai";
 str = "harhar1r2r3r bhai";

let result = regex.exec(str);
console.log("The result from exec is", result);
if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);

}