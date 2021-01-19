console.log("This is tutorial 8");
const age = 28;
const doesDrive = true;
// const vari = 34;
// if(age===19){
//     console.log('Age is19')
// }
// else if(age !==65){
//     console.log('age is 65')
// }
// else {
//     console.log('Age is not 19');
// }
// if(typeof vari !== 'undefined'){
//     console.log('vari is defined');
// }
// else {
//     console.log('vari is not')
// }

// if (doesDrive || age>18){
//     console.log("You can drive");
// }
// else {
//     console.log('you can not drive')
// }

// console.log(age ==45? "Age is 45": "age is not45" );

switch (age) {
  case 18:
    console.log("You are 18");
    break;
  case 28:
    console.log("You default are 28");
    break;
  case 38:
    console.log("You are 38");
    break;

  default:
      console.log(`you are ${age}`);
    break;
}
