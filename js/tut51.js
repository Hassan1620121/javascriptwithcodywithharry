console.log("This is tutorial 51 of javascript");
//Iterators

function fruitsIterator(values) {
  let nextIndex = 0;
  //we will return as object
  return {
    next: function () {
      if (nextIndex < values.length) {
        //we will return this object
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        //We will return below object, with only done
        return { done: true };
      }
    },
  };
}
const myArray = ["Apple", "Grapes", "Oranges", "Bhindi"];
console.log("mya array is", myArray);


//Using the iterators

const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
