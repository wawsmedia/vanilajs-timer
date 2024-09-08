// DOM elements -------------
const mainTimer = document.getElementById('timer')
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');


// timer variables----------

let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null
let timerStatus = ""


// timer function----------------

function timer(){
    seconds++
    if(seconds/60 === 1){
        minutes++;
        seconds = 0;
        if(minutes/60 === 1){
            hours++;
            minutes = 0;
        }
    }

    if (seconds < 10){
        leadingSeconds = "0" + seconds.toString();
   
       }else {
           leadingSeconds = seconds
       }
       if (minutes < 10){
        leadingMinutes = "0" + minutes.toString();
   
       }else {
           leadingMinutes = minutes
       }
       if (hours < 10){
        leadingHours = "0" + hours.toString();
   
       }else {
           leadingHours = hours
       }

  mainTimer.innerHTML = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds  
}


// start stop button logic --------------


startStopBtn.addEventListener("click" , function(){
     if (timerStatus === "deactive"){
        timerInterval = window.setInterval(timer , 1000)
        timerStatus = "active"
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id = "pause"></i>`

     }else {
        window.clearInterval(timerInterval)
        timerStatus = "deactive"
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id = "play"></i>`
     }
    
    
    })


//  reset button logic ---------------

resetBtn.addEventListener("click" , function(){
    seconds = 0;
    minutes = 0;
    hours = 0
    window.clearInterval(timerInterval)
    mainTimer.innerHTML = "00:00:00"
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id = "play"></i>`
})    