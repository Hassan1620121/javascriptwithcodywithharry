console.log("this is tutorial 47");
let regex = /harryjkljl/;

// lets looks into some metacharatcter symbols 
regex = /^harrdc/; //^ means exprssion will match if string starts with

regex = /ryy$/; //$ at end of the string means "string ends with"

regex = /h.rry/;
regex = /h*rry/; //matches any 0 or more characters 
regex = /ha?rryi?/; //matches any 0 or more characters 

regex = /h\*rry/;

let str = "harry"; //? after character means character is optional


let result = regex.exec(str);
console.log("The result from exec is", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);

}