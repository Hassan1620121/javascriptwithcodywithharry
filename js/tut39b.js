console.log("this is tutorial 37 of javascript");

//Pretend that this response is comming from the server
const students = [
  { name: "hasssan", subject: "Javascript" },
  { name: "Sial", subject: "Python" },
];

// students.forEach();

function enrollStudent(student) {
    return new Promise(function(resolve,reject){

        setTimeout(function () {
            students.push(student);
            console.log("student has been enrolled");
            const error = false;
            if(!error){

                resolve();
            }
            else{
                reject();
            }
            
          }, 5000);

    })
  
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
enrollStudent(newStudent,getStudents).then(getStudents).catch(function(){
    console.log("Some error occured")
});
// getStudents();


// inside then funciton is resolve. and inside cath is reject 
