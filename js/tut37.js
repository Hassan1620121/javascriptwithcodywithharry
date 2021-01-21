console.log("this is tutorial 37 of javascript");

//Pretend that this response is comming from the server
const students = [
  { name: "hasssan", subject: "Javascript" },
  { name: "Sial", subject: "Python" },
];

// students.forEach();

function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("student has been enrolled");
    callback();
  }, 8000);
}
function getStudents() {
  setTimeout(function () {
      let str = "";
      students.forEach(function(student){
        str+= `<li>${student.name}</li>`        
      });
      document.getElementById('students').innerHTML = str;
      console.log("students have been fetched");
    
  }, 1000);
}

let newStudent = {name:"Asad", subject:"Python"}
enrollStudent(newStudent,getStudents);;
// getStudents();
