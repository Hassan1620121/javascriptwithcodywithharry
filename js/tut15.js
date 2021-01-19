console.log('welcome to tutorial 15');
let cont = document.querySelector('.no');
 cont = document.querySelector('.container');
 let nodeName = cont.childNodes[3].nodeName;
 let nodeType = cont.childNodes[8].nodeType;
//  console.log(nodeName);
//  console.log(nodeType);
// Node Types 
// 1. element
// 2. attribute
// 3. text node
// 8. comment
// 9. documment
// 10. doctype
 

// console.log(cont.childNodes);
// console.log(cont.children);


let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
// console.log(container.childNodes)
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
console.log(container.lastElementCount); //Count of Child elements


console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);




