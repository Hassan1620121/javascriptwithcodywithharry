console.log("Thsi is tutorial 56 of javascript on for in and for off loops");

let people = ["Harry","Rohan","Skillif", "Shubham", "Vikrant"];

// ========================For in Loops ================   
// Traditional for loops 
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
    
// }
//1. Iterating An OBJECT
let obj = {
    nam: "Harry",
    language: "Javascript",
    hobbies: "Android App Development"
}
// console.log(obj);

// 1.1 Iterating an object using Traditional for loops 

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
    
// }

//1.2 Iterating an object using modern for in loops 
for(let key in obj){
    console.log(obj[key]);
}
//2. Iterating string
//We can use for in with strings to loop through all the characters
myString = "This is my string";

for (let char in myString) {
    console.log(myString[char]);
}


// Quick Quiz: Use traditional for loops to iterate through the same string 


//
console.log('************For of loop starts here');

people = ["Harry","Rohan","Skillif", "Shubham", "Vikrant"];
for(let nam in people){
    console.log(nam);
}


for(let nam of myString){
    console.log(nam);
}



