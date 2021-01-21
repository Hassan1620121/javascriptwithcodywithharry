console.log("this is tutorial 46");
let reg = /harry/; //This is a regurlar expression literal in js
 reg = /harry/g; //g means global
//  reg = /harry/i; //i means case insensitive

console.log(reg);
// console.log(reg.source);

let s = "This is great code with harry and also harry bhai";
// functions to match expressions
// 1. exec() - This function will return an array for atch ornull for no match
let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);

// result = reg.exec(s);
// console.log(result);
// if (result) {
//   console.log(result); //We can use mutliple exact
//   console.log(result.input);
//   console.log(result.index);
// }

// 2. test() returns true or false
let result2 = reg.test(s);
// console.log(result2);

// 3. match() - it will return array of results or null 
// let result3 = reg.match(a) //--This is wrond
let result3 = s.match(reg)//--This is wrond
// console.log(result3);


// 4. search() - returns index of first match else -1 
let result4 =  s.search(reg)//--This is right
// console.log(result4)


// 5. replace() - returns new replaced string with all the replacements (if no global flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
console.log(result5);



