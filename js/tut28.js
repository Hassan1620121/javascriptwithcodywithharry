console.log('This is tutorial 29');


//Object literal Object.Prototype start
let obj = {
    name: "hassan",
    channel: "Code with Hassan",
    address: "I-8 Islamabad",


}
function Obj(givenName){
    this.name = givenName
}
Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.setName = function (newName) {
    return this.nam = newName;
}


let obj2 = new Obj("Iqbal Hassan");
console.log(obj2.toString());