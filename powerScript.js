// difference between them is that var is function scoped and let is block scoped. letiable declared by let cannot be redeclared and must be declared before use whereas letiables declared with let keyword are hoisted. Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).In JavaScript, a letiable can be declared after it has been used.
let alHours = '';
let alMinutes = '';
let alarmTime = '';


//Alarm Clock display settings
function digitalClock(){
    let date = new Date();
    let hours = date.getHours() + '';
    let minutes = date.getMinutes() + '';
    let seconds = date.getSeconds() + '';
    let day = date.getDay();

    if(hours.length < 2) {
        hours = '0' + hours;
    }

    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }

    let weekDays = ['Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,']

    let clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

    // Alarm Set Time -- > plays sound till 12 seconds
    if (minutes == alMinutes && hours == alHours && date.getSeconds() < 12 ) {
        //Calls function playBeep
        playBeep();
    }         
}



// Set Alarm Time
function setAlrmTime() {
    let timeString = String(document.getElementById("alarmTimeSelect").value);
    alHours = timeString.charAt(0) + timeString.charAt(1);
    alMinutes = timeString.charAt(3) + timeString.charAt(4);
    document.getElementById("alarm").innerHTML = 'Alarm: ' + alHours + ':' + alMinutes;    
}

// Set Snooze Time


//Snooze Button set to 10 minutes
function snooze() {
    if (alMinutes != '' || alHours != ''){
    //set snooze time below
        let snoozMinutes = Number(document.getElementById("snoozeTimeSelect").value);
        if  (Number(alMinutes) < 50)  {
            snoozMinutes += Number(alMinutes);
            alMinutes = String(snoozMinutes);
            alHours = alHours;

        } else if (Number(alMinutes) >= 50) {
            snoozMinutes = (Number(alMinutes)+snoozMinutes) - 60;
            if (snoozMinutes === 0 ){
                alMinutes = '00';            
            }else {
                alMinutes = '0' + String(snoozMinutes);
            }
                    
            alHours = Number(alHours) +1;
            String(alHours );
        }

        document.getElementById("alarm").innerHTML = 'Alarm: ' + alHours + ':' + alMinutes;

    }    
}

//Alarm Sound//
function playBeep() {
    let audio = new Audio('audio');
    audio.src = "https://freesound.org/data/previews/316/316847_4939433-lq.mp3"
    audio.play();
}  


digitalClock();
//Interval needed to make Clock run live
setInterval(digitalClock, 1000);