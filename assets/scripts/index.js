'use strict';

// Clock

let clock = document.querySelector('.clock');
let alarmClockTimer = document.querySelector('.alarm-clock-timer-text');
let setAlarmClock = document.querySelector('.set-alarm-clock');
let inputTimeHours = document.querySelector('.input-time-hours').value;
let inputTimeMinutes = document.querySelector('.input-time-minutes').value;

function clockTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    clock.innerText = hours + ':' + minutes;
}

clockTime();

setInterval(clockTime, 1000);

// Set the alarm clock

function addLeadingZero(number) {
    return number.toString().padStart(2, '0') ;
}

let paddedHours = addLeadingZero(inputTimeHours);
let paddedMinutes = addLeadingZero(inputTimeMinutes);

if (inputTimeHours !== null && inputTimeMinutes !== null) {
    console.log(paddedHours); 
    console.log(paddedMinutes);
} 

function addLeadingZero(number) {
    return number.toString().padStart(2, '0');
}

addLeadingZero(inputTimeHours);
addLeadingZero(inputTimeMinutes);

function displayText() {
    let currentDate = new Date();
    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let inputTimeHours = document.querySelector('.input-time-hours').value;
    let inputTimeMinutes = document.querySelector('.input-time-minutes').value;
        if (inputTimeHours.trim() === "" || inputTimeMinutes.trim() === "") {
            alert("Please enter both hours and minutes.");
            return;
        }

        if (hours === inputTimeHours && minutes === inputTimeMinutes) {
            clearInterval(alarmInterval);
            alert("Please, enter future number");
            return;
        }

        if (isNaN(inputTimeHours) || isNaN(inputTimeMinutes) || inputTimeHours < 0 || inputTimeHours > 23 || inputTimeMinutes < 0 || inputTimeMinutes > 59) {
            alert("Please enter valid hours (0-23) and minutes (0-59).");
            return;
        }

        alarmClockTimer.innerText = inputTimeHours + ':' + inputTimeMinutes;

        setAlarm();
        }

        // Setting the alarm
        let alarmInterval;

function setAlarm() {
    const inputTimeHours = document.querySelector('.input-time-hours').value;
    const inputTimeMinutes = document.querySelector('.input-time-minutes').value;

    if (!inputTimeHours || !inputTimeMinutes) {
        alert("Please set both hours and minutes for the alarm.");
        return;
    }

function alarmTrigger() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const audio = new Audio('assets/audio/Alarm-clock-ringing-sound-effect.mp3');

    if (`${hours}:${minutes}` === `${inputTimeHours}:${inputTimeMinutes}`) {
        audio.play();
        clearInterval(alarmInterval);
        }
    }
    alarmInterval = setInterval(alarmTrigger, 1000);
}

setAlarmClock.addEventListener('click', function() {displayText()});