// const timer = document.getElementById('timer');

let timeLeft = 1500;
let pauseTime = timeLeft;
let timerId;
const button2 = document.getElementById('second-button');


function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = Math.floor(timeLeft % 60);
    document.getElementById('timer').innerText =
    `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer(){
    if(!timerId && button2.innerHTML !== 'Resume'){
        timerId = setInterval(function() {
            if(timeLeft > 0){
                timeLeft--;
                updateTimer();

                if(timeLeft <= 60){
                    document.getElementById('timer').style.color = 'red';
                    document.getElementById('timer').style.backgroundColor = 'black';
                    document.getElementById('timer').style.borderRadius = '5px';
                }
            }else{
                // Timer is done 
                clearInterval(timerId);
                document.getElementById('message').innerText = "Time's up! Take a break!";
                updateTimer();
            }
        },1000)//1000 milliseconds = 1 second
    }
}
function stopTimer(){
    clearInterval(timerId);
    timerId = null;
    timeLeft = 1500;
    document.getElementById('timer').style.color="black";
    document.getElementById('timer').style.backgroundColor = 'white';
    document.getElementById('message').innerText = "";
    document.getElementById('timer').style.borderRadius = "0px";
    button2.innerHTML = 'Pause'
    updateTimer();

}
function pauseTimer(){
    clearInterval(timerId);
    timerId = null;

    /** this changes the start button to resume when pause is pressed */
    if(button2.innerHTML !== 'Resume'){
        button2.innerHTML = 'Resume';
    }else{
        button2.innerHTML = 'Pause';
        startTimer();
    }
}
updateTimer();

