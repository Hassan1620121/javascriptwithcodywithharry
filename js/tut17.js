console.log("This is tut 17 on events");
document.getElementById("heading").addEventListener("mouseover", function (e) {
  let variable;
  console.log("You have clicked the heading");
  variable = e.target.className;
  variable = e.target.classList;
  variable = e.target.id;
  variable = Array.from(e.target.className);
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.offsetY;
  variable = e.clientX;



  console.log(variable);
  // location.href = '//codewithharry.com';
});
