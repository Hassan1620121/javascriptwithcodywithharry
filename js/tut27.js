console.log("This is tutorial 27");

//ObjectLiteral for creating objects

let car = {
  nam: "Maruti 800",
  topSpeed: 89,
  run: function () {
    console.log("car is running");
  },
};
// we have already seen constructors like these:
// new Date();

//Creating a constructor for cars
function GeneralCar(givenname, givenspeed) {
  this.nam = givenname;
  this.topSpeed = givenspeed;
  this.run = function () {
    console.log(`${this.nam} is running`);
  };
  this.analyze = function () {
    console.log(
      `This car is slower by ${250 - this.topSpeed} KmpH than Mercedez`
    );
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("hondaCity", 200);
car3 = new GeneralCar("HondaCivic", 400);

console.log(car2);
