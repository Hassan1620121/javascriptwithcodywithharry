console.log("This is tutorial 57 of js");

// Maps in Javascript : We can use any type of key or value

const myMap = new Map();

const key1 = "myStr",
  key2 = {},
  key3 = function () {};

//Setting map Values
myMap.set(key1, "This is a string");
myMap.set(key2, "This is a blank object");
myMap.set(key3, {value: "This is an empty function"});
console.log(myMap);

// Getting the values from a Map
let value1 = myMap.get(key3);
console.log(value1);

//Getting the size of the map
console.log(myMap.size);

//You can loop using for of to get keys and values.
//Aap isko for loop ki madad se bhi
for (let [key, value] of myMap) {
  console.log(key, value);
}


// Get only keys 
for(let key of myMap.keys()){
    console.log('key is',key);
    
}
// Get only keys 
for(let value of myMap.values()){
    console.log('value is',value);
    
}

//You can loop through a map using for each loop
myMap.forEach((value,key)=>{
    console.log('key is ', key);
    console.log('value is ', value);
    
})
// converting map to array 
let myArray = Array.from(myMap);
console.log('Map to array is', myArray);

// converting map keys to array 
let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is', myKeysArray);
// converting map values to array 
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is', myValuesArray);

