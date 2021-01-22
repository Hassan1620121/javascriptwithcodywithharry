// You have to create an alarm lock in javascript using creatibity 
// Allow users to set alarm for a certain time

//Add event listener to the submit button
console.log("This is tutorial 54 on js");
const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click',setAlarm);

var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');
//function to play the alarm ringtone
function ringBell(){
    audio.play();

}

//This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value)
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("ringing now");
            ringBell();
            
        }, timeToAlarm);
    }
    


}


