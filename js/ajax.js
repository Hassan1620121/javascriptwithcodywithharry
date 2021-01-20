console.log("ajax tutorial in 1 window");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the fetchButton");
  //instantiate a next hr object
  let xhr = new XMLHttpRequest();

  //Open the object
  xhr.open("GET", "harry.txt", true);

  //What to do on progress (optional)

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onreadystatechange = function () {
      console.log("ready state is ",xhr.readyState);
  }
  //What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
    else{
        console.log("some error occured");
    }
  };

  //Send the request
  xhr.send();
}
