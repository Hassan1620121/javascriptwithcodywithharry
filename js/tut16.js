console.log('THis is tut16');
let element = document.createElement('li');
let text = document.createTextNode('I am a textNode')
element.appendChild(text);
console.log(element);

//Add a class name to the li element


element.className = 'childul';
element.id = 'createdli';
element.setAttribute('title', 'mytitle');
element.innerHTML = '<h1>Hello this is created by hassan</h1>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);

// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.class = 'elem2';
let tnode = document.createTextNode('This is a created node')
elem2.appendChild(tnode);
element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
// console.log(pr)
elem2.removeAttribute('id');
elem2.setAttribute('name','hassan');
console.log(elem2,pr);

let naninode = document.createTextNode('This is my Quiz');
