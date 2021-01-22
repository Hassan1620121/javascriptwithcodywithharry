console.log("THis is project 4 js");
const nam = document.getElementById("nam");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let nameValid = false;
let emailValid = false;
let phoneValid = false;
$('#failure').hide();
$('#success').hide();


// console.log(nam,email,phone);

nam.addEventListener("blur", () => {
  console.log("name is blurred");
  //validate name here

  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = nam.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is valid");
    nam.classList.remove("is-invalid");
    nameValid = true;

  } else {
    console.log("Your name is not valid");
    nam.classList.add("is-invalid");
    nameValid = false;

  }
});

email.addEventListener("blur", () => {
  console.log("email is blurred");
  //validate email here

  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your email is valid");
    email.classList.remove("is-invalid");
    emailValid = true;
  } else {
    console.log("Your email is not valid");
    email.classList.add("is-invalid");
    emailValid = false;

    
  }
});

phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  //validate phone here

  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your phone is valid");
    phone.classList.remove("is-invalid");
    phoneValid = true;

  } else {
    console.log("Your phone number is not valid");
    phone.classList.add("is-invalid");
    phoneValid = false;

  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  //Submit your form here
  console.log("YOu clicked on submit");
  console.log(nameValid,phoneValid,emailValid);
  if (emailValid && nameValid && phoneValid) {
    let failure = document.getElementById("failure");

    console.log("phone, email and user are valid. submitting the form.");
    
    let success = document.getElementById("success");
    success.classList.add("show");
    // failure.classList.remove("show");
    // $('#failure').alert('close');
    $('#failure').hide();
    $('#success').show();



  } else {
    console.log(
      "one out of phone, email or user are not valide. Hence not submitting the forms, please correct the errors. and try again. "
    );
    let failure = document.getElementById("failure");
    let success = document.getElementById("success");

    failure.classList.add("show");
    // success.classList.remove("show");
    
    // $('#success').alert('close');
    $('#success').hide();
    $('#failure').show();



  }
});
