console.log('This is tutorial 58 file');

//Set stores unique values
let mySet = new Set(); //Initialize an empty set
console.log('The set looks like:',mySet);

//Adding values to the set
mySet.add('this');
mySet.add('My name');
mySet.add('My name');
mySet.add('My address');
mySet.add(34);
mySet.add(true);
console.log('The set looks like now:',mySet);
//use a constructor to initialize the set
// mySet =  new Set([1,4,'this',false,{a:4,b:8}]);
console.log('The set looks like now:',mySet);

console.log(mySet.size);  //Get the size of the set
console.log(mySet.has('My name')); //Check whether My name or not


console.log('before removal mySet',mySet);
mySet.delete('My address');
console.log('After removal mySet',mySet);

//Iterating a set

// for (const item of mySet) {
//     console.log('Item is :',item);
    
// }

mySet.forEach(item => {
    console.log('Item is :', item);
    
});

let myArrays = Array.from(mySet);
console.log(myArrays);


// Quiz: Can you sue Array.from(mySet) to convert set intro an array? 




