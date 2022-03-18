const favicon = document.getElementById("favicon");
const title = document.querySelector("title");
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
    
    if( 1 < timePomodoro <= 4 && (timePomodoro != -2)){
        countdownSet("on");
        startButton.style.display = "none";
    }else if(timePomodoro < 0){
        startButton.style.display = "none";
        return countdownRest();
    }
    
})

pauseButton.addEventListener('click',()=>{
    countdownSet("off");
    startButton.style.display = "flex";

})

function countdownSet(state){
        
    if(state === "on"){
        this.time = timeInterval = setInterval(countdownMath,1000);
        title.textContent = clockMinutes.textContent+clockSeconds.textContent + " Pomodoro Timer"

        function countdownMath(){
            const minutes = Math.floor((timePomodoro / 60));
            const seconds = Math.round(timePomodoro % 60);
            
            title.textContent = minutes +":" + (seconds < 10 ? "0" + seconds : seconds) + " Pomodoro Timer";

            clockMinutes.textContent = minutes + ":";
            (seconds < 10 ? clockSeconds.textContent = "0" + seconds : clockSeconds.textContent = seconds); 
            timePomodoro = timePomodoro - 1;
    
            if(timePomodoro === -2){
                clockMinutes.textContent = "0:";
                clockSeconds.textContent = "05";
                title.textContent = "Pomodoro Timer"
                timePomodoroRest = 4;
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

function countdownRest(){

    this.time = timeIntervalRest = setInterval(countdownMathRest,1000);
    
    favicon.setAttribute("href", "/images/favicon2-32x32.png");
    title.textContent = clockMinutes.textContent+clockSeconds.textContent + " Pomodoro Timer"    

    function countdownMathRest(){
        const minutes = Math.floor((timePomodoroRest / 60));
        const seconds = Math.round(timePomodoroRest % 60);
            
        title.textContent = minutes +":" + (seconds < 10 ? "0" + seconds : seconds) + " Pomodoro Timer" ;

        clockMinutes.textContent = minutes + ":";
        (seconds < 10 ? clockSeconds.textContent = "0" + seconds : clockSeconds.textContent = seconds); 
            
        timePomodoroRest = timePomodoroRest - 1;

        if(timePomodoroRest === -2){
        clockMinutes.textContent = "0:";
        clockSeconds.textContent = "05";
        title.textContent = "Pomodoro Timer";
        favicon.setAttribute("href", "/images/favicon-32x32.png");
        timePomodoro = 4;
        return clockStopRest();
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
    changeGreen();
    return countdownRest();
}

function clockStopRest(){
    clearInterval(timeIntervalRest);
    startButton.style.display = "flex";
    startButton.textContent = "START";
    changeRed();
}

function changeGreen(){
    startButton.style.color = "hsl(159,53%,34%)";
    pauseButton.style.color = "hsl(159,53%,34%)";
    body.style.backgroundColor = "hsl(159, 53%, 28%)";
    containerClock.style.backgroundColor = "hsl(159,53%,34%)";
    clockCard.style.backgroundColor = "hsl(159,53%,39%)";
}

function changeRed(){
    startButton.style.color = "hsl(6, 57%, 49%)";
    pauseButton.style.color = "hsl(6, 57%, 49%)";
    body.style.backgroundColor = "hsl(6, 57%, 49%)";
    containerClock.style.backgroundColor = "hsl(6, 57%, 55%)";
    clockCard.style.backgroundColor = "hsl(6, 57%, 60%)";   
}

