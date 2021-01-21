console.log("This is tutorial 41");

//ARROW FUNCTIONS

//Creating a normal function
// const harry = function harry(){
//     console.log("this is the best tutorial");
// }

// harry();

// Crating to arrow function 
// const harry = () =>{
//     console.log("this is the best tutorial");
// }

// const greet =function(){
//     return "Good Morning";
// }

// const greet = () => {
//     return "Good Morning";
// }
//One liners donot require braces
// const greet = () =>"Good Morning";

// const greet =() => ({name: "hassan"}); 
const greet = (nam, ending) => "Good Morning "+ nam + ending; 


console.log(greet('Harry','bye'))


// console.log(greet());
