// console.log('we are at tutorial 6');
const nam = 'Harry';
const greeting = 'Good morining';
// console.log(greeting + ' ' + nam);


let html;
html = "<h1>This is heading</h1>" +
"<p>This is paragPPPh</p>";

html = html.concat('this', 'str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());


// console.log(html[0]);

// console.log(html.indexOf('h1'));
// console.log(html.lastIndexOf('h1'));
// console.log(html.charAt(6));
// console.log(html.includes('is'));
// console.log(html.substring(0,5));
// console.log(html.slice(0,4));
// console.log(html.split('>'))
// console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml =`Hello ${nam}
            <h1>This is heading</h1>
            <p>You like ${fruit1} and ${fruit2}

`;
document.body.innerHTML = myHtml;

