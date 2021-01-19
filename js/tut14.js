console.log("welcome to tutorial 14");

/* 
Element selector



*/

let element =document.getElementById('first');
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Hassan is a good Man';
element.innerHTML = '<b>Hassan is a good Man<b>';

console.log(element.innerHTML);


let sel = document.querySelector("div");


sel.style.color = 'green';
console.log(sel);


//Multielement selectors
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);


for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = "blue";
    
}

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue';
// });
// console.log(elems[0].getElementsByClassName('child'));