console.log('we are in tut7.js');
let marks = [14,20,34,47,58,6,73,84];
const fruits =['orange', 'apple', 'pineapple'];
const mixed =['str',89,[3,5]]; 


const arr = new Array(23,45,67,89,'orange');
// console.log(mixed);
// console.log(fruits[1]);
// console.log(marks);
// console.log(arr.length);
// console.log(Array.isArray('kjlljl'));

arr[0] = 'Hassan';
let arrElement =arr[0];
// console.log('element: ', arrElement)
// console.log(arr);


let value = marks.indexOf(73);
// console.log(value);

//Mutating or Modifying arrays
// marks.push(23);
// marks.unshift(1000);
// marks.pop();
// marks.shift();
// marks.splice(4,3);
let marks2 = [1,2,3,4]
// marks.reverse();
marks = marks.concat(marks2)
// console.log(marks);

let myObj = {
    'first name': 'Hassan',
    channel: 'codding',
    isActive: true,
    marks: [1,2,3,4,5]
}
console.log(myObj['channel']);
console.log(myObj.isActive);

