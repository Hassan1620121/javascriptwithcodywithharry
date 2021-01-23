console.log("This is Creating a clock tutorial on js with code with harry");
function updateClock() {
  //Get the current date
  let currentTime = new Date();

  //Extract hour, minutes and seconds from the date
  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  //Pad 0 if minute or second is les than 10 (single digit)
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  // currentHour = (currentHour <10 ? "0": "") + currentHour;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  //Convert reailway clock to AM/PM clock
  currentHour = currentHour > 12 ? currentHour - 12 : currentHour;
  currentHour = currentHour == 0 ? 12 : currentHour;

  //Choose AM PM as per the day
  let timeOfDay = currentHour < 12 ? "AM" : "PM";
  //Prepare the time string from thour, mintue, and econd..
  let currentTimeStr =
    currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  //Insert the time string inside the DOM.
  document.getElementById("clock").innerHTML = currentTimeStr;
}
