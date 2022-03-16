const body = document.querySelector("body");
const containerClock = document.querySelector(".container-clock")
const clockCard = document.querySelector(".clock-card");

const startButton = document.querySelector("#btn-start");
const pauseButton = document.querySelector("#btn-pause");

const clockMinutes = document.querySelector(".clock-minutes");
const clockSeconds = document.querySelector(".clock-seconds");

var timePomodoro = 4; //1499
var timePomodoroRest = 4; //299

startButton.addEventListener('click',() => {
    countdownSet("on");
    startButton.style.opacity = "0";
    pauseButton.style.justifyContent = "center";
    if(timePomodoro === -1){
        timePomodoro = 4;
    }
    if(timePomodoroRest === -1){
        timePomodoroRest === 4;
    }
})

pauseButton.addEventListener('click',()=>{
    countdownSet("off");
    startButton.style.opacity = "1";
})

function countdownSet(state){
        
        if(state === "on"){
            this.time = timeInterval = setInterval(countdownMath,1000);
            
            function countdownMath(){
                const minutes = Math.floor((timePomodoro / 60));
                const seconds = Math.round(timePomodoro % 60);
            
                clockMinutes.textContent = minutes + ":";
                clockSeconds.textContent = seconds;
            
                timePomodoro = timePomodoro - 1;
    
                if(timePomodoro === -1){
                    clockMinutes.textContent = "0:";
                    clockSeconds.textContent = "5";
                    return clockStop();
                }
            }
        }else if(state === "off"){
            if(timePomodoroRest === 4){
                return countdownStop(timeInterval);
            }else{
                return countdownStopRest(timeIntervalRest);
            }
        }
}

function countdownStop(time){
    clearInterval(time);
    startButton.textContent = "RESUME";
}

function countdownStopRest(time){
    clearInterval(time);
    startButton.textContent = "RESUME";
}

function clockStop(){
    clearInterval(timeInterval);
    body.style.backgroundColor = "hsl(159, 53%, 28%)";
    containerClock.style.backgroundColor = "hsl(159,53%,34%)";
    clockCard.style.backgroundColor = "hsl(159,53%,39%)";

    return countdownRest();
}

function clockStopRest(){
    clearInterval(timeIntervalRest);
    startButton.style.opacity = "1";
    startButton.textContent = "START";
    body.style.backgroundColor = "hsl(6, 57%, 49%)";
    containerClock.style.backgroundColor = "hsl(6, 57%, 55%)";
    clockCard.style.backgroundColor = "hsl(6, 57%, 60%)";   
}

function countdownRest(){
    if(timePomodoroRest != 4){
        timePomodoroRest === 4;
    }

    this.time = timeIntervalRest = setInterval(countdownMathRest,1000);
            
        function countdownMathRest(){
            const minutes = Math.floor((timePomodoroRest / 60));
            const seconds = Math.round(timePomodoroRest % 60);
            
            clockMinutes.textContent = minutes + ":";
            clockSeconds.textContent = seconds;
            
            timePomodoroRest = timePomodoroRest - 1;

            if(timePomodoroRest === -1){
                clockMinutes.textContent = "0:";
                clockSeconds.textContent = "5";
                return clockStopRest();
            }
        }
}
