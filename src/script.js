// const timer = document.getElementById('timer');

let time = 1500;
let pauseTime = time;
let timerId;
const button2 = document.getElementById('second-button');


function updateTimer(){
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    document.getElementById('timer').innerText =
    `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer(){
    if(!timerId && button2.innerHTML === 'Pause'){
        timerId = setInterval(function() {
            if(time > 0){
                time--;
                updateTimer();

                if(time <= 60){
                    document.getElementById('timer').style.color = 'red';
                    document.getElementById('timer').style.backgroundColor = 'black';
                    document.getElementById('timer').style.borderRadius = '5px';
                    document.getElementById('timer').style.border = '2px solid white';
                }
            }else{
                // Timer is done 
                clearInterval(timerId);
                document.getElementById('message').innerText = "Time's up! Take a break!"; /*not to the description */
                alert("take a break"); /*the correct way of doing it */
                updateTimer();
            }
        },1000)//1000 milliseconds = 1 second
    }
}
function stopTimer(){
    clearInterval(timerId);
    timerId = null;
    time = 1500;
    document.getElementById('timer').style.color="black";
    document.getElementById('timer').style.backgroundColor = 'white';
    document.getElementById('message').innerText = "";
    document.getElementById('timer').style.borderRadius = "7px";
    document.getElementById('timer').style.backgroundColor
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

