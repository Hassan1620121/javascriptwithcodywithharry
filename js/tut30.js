console.log('This is tutorial 30');

const proto = {

    slogan: function(){
        return `This company is the best`;
    },

    changeName: function(newName){
        this.name = newName
    }
}
//This creates Harry Object
// const harry = Object.create(proto);
// harry.nam = "Harry";
// harry.role = "programmer";

//This also creates harry object
const harry = Object.create(proto,{
    name: {value: "harry",writable:true},
    role: {vaue: "programmer"}
})

harry.changeName("Harry2");



// console.log(harry);

function Employee(name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}


//Slogan

Employee.prototype.slogan = function(){
    return `This company is the best. regards, ${this.name}`;
}

let harryObj = new Employee("Harry",30000, 89);
console.log(harryObj.slogan);


//Programmer

function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language = language;

}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually Set the constructor
Programmer.prototype.constructor = Programmer;

let hassan = new Programmer("hassan",2,0,"Javascript");
console.log(hassan);

