console.log('this is tut20');

let impArray = ['adrak','piyaz','bhindi']


//Add a keyvalue inside local storage
localStorage.setItem('Name','Hassan');
localStorage.setItem('Name2','Iqbal');
localStorage.setItem('Sabzi',JSON.stringify(impArray));


//Clears the entire local storage

//Retreive the item from local storaged
// localStorage.clear();
//Clear a particular key
localStorage.removeItem('Name2');
let nam = localStorage.getItem('Name2kljkj');
nam =JSON.parse(localStorage.getItem('Sabzi'));
console.log(nam);


// sessionStorage.setItem('sessionName','Hassan');
// sessionStorage.setItem('sessionName2','Iqbal');
// sessionStorage.setItem('sessionSabzi',JSON.stringify(impArray));
