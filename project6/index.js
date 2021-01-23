console.log("This is my project 6 from javascript course");

//Utility functions
//1. Utility funciton to get DOM element from string
function getElementFromString(string){
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}
//Initialize no of parameters 
let addedParamCount = 0;

//Hide the parameters box initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";

//If the user clicks on params,it will hide the json box
let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
  document.getElementById("requestJsonBox").style.display = "none";
  document.getElementById("parametersBox").style.display = "block";
});

//If the user clicks on json,it will hide the params box
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
  document.getElementById("parametersBox").style.display = "none";
  document.getElementById("requestJsonBox").style.display = "block";
});

//If the user clicks on plus button add more parameters
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  let params = document.getElementById("params");
  let string = `<div class="form-row my-2">
                    <label for="urlField" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
                    <div class=" col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter enter parameter${addedParamCount + 2} key">
                    </div>
                    <div class=" col-md-4">

                        <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter parameter ${addedParamCount + 2} value">
                    </div>
                    <button  class="btn btn-primary deleteParam">-</button>
                </div>`;
    //Convert the element strin gto DOM Node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
    //Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for ( item of deleteParam) {
        item.addEventListener('click',(e)=>{
            //TODO. Add a confirmatiom box to coneim paramter deletion. 
            e.target.parentElement.remove();
        })
    }
    addedParamCount++;

});


//If the user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    // console.log('clicked on submit')
    //Show please wait in the reponse box to request patience form the user
    document.getElementById('responsePrism').innerHTML = "please wait...fetching response...";
    Prism.highlightAll();

    //Fetch all the values user has entered
    let urlField = document.getElementById('urlField').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    //Log all the values in the console for debugging
    // console.log('URL is', urlField);
    // console.log('requestType is', requestType);
    // console.log('contentType is', contentType);

    //If user has used params option instead of json, collect all the parameters in an object
    if(contentType=='params'){
        data = {};
        for (i = 0; i <addedParamCount+1; i++) {
            if(document.getElementById('parameterKey'+ (i+1))!=undefined){
           let key = document.getElementById('parameterKey'+ (i+1)).value;
           let value = document.getElementById('parameterValue'+(i+1)).value;
           data[key] = value;
        }
        
    }
    data = JSON.stringify(data);
    }
    else{
        data = document.getElementById('requestJsonText').value;
    }

    console.log('URL is', urlField);
    console.log('requestType is', requestType);
    console.log('contentType is', contentType);
    console.log('data is', data);
    //If the request type is post, invoke fetch api to create a post request
    if(requestType=='GET'){
        fetch(urlField,{
            method: 'GET',
        })
        .then(response =>response.text())
        .then((text)=>{
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();

        });

    }

    else{

        fetch(urlField,{
            method: 'POST',
            body:data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(response =>response.text())
        .then((text)=>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });

    }
})


