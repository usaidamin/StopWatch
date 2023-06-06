//STOP WATCH

var minute = document.getElementById("minute")
var second = document.getElementById("second")
var milisecond = document.getElementById("milisecond")

var min = 0;
var sec = 0;
var milisec = 0;

var interval;

function timer()
{
    milisec++
    milisecond.innerHTML = milisec;
    if (milisec >= 100)
    {
        sec++;
        second.innerHTML = sec;
        milisec = 0;
    }
    else if (sec >= 60)
    {
        min++;
        minute.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer, 10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    clearInterval(interval)
    milisec = 00;
    sec = 00;
    min = 00;

    milisecond.innerHTML = "00";
    second.innerHTML = "00";
    minute.innerHTML = "00";
}