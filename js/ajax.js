console.log("ajax tutorial in 1 window");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the fetchButton");
  //instantiate a next hr object
  const xhr = new XMLHttpRequest();

  //Open the object
  xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
  xhr.getResponseHeader('Content-type', 'application/json')


  //What to do on progress (optional)

  xhr.onprogress = function () {
    console.log("on progress");
  };

  // xhr.onreadystatechange = function () {
  //     console.log("ready state is ",xhr.readyState);
  // }
  //What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
    else{
        console.log("some error occured")
    }
  }

  //Send the request
  params = `{"name":"test64545","salary":"12563","age":"23"}`;
  xhr.send(params);


  console.log("we are done");
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler() {


  console.log("You have clicked the Pop handler");
  //instantiate a next hr object
  const xhr = new XMLHttpRequest();
  //Used for get request
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);


  //Open the object
  // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
  // xhr.getResponseHeader('Content-type', 'application/json')


  //What to do on progress (optional)


  // xhr.onreadystatechange = function () {
  //     console.log("ready state is ",xhr.readyState);
  // }
  //What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById('list');
      str = "";
      for(key in obj){
        str +=`<li>${obj[key].title}</li>`;

      }
      list.innerHTML = str;
    }
    else{
        console.log("some error occured")
    }
  }

  //Send the request
  
  xhr.send();


  console.log("we are done fetching employees");

}


