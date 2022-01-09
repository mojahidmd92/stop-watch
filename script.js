let time = 0;
let count = 0;
let timeout;
const log = document.getElementById('log');
document.addEventListener('keydown', logKey);
function logKey(e) {
    if (e.key == "s" || e.key == "S") {
        start();
    }
    else if (e.key == "p" || e.key == "P") {
        pause();
    }
    else if (e.key == "r" || e.key == "R") {
        reset();
    }

}
let start = () => {
    var snd = new Audio("start.wav");
    snd.play();
    if (!time) {
        time = 1;
        counter();

    }
    snd.currentTime = 0;
}
let pause = () => {
    var snd = new Audio("pause.wav");
    snd.play();
    clearTimeout(timeout);
    time = 0;
    snd.currentTime = 0;

}
let counter = () => {
    // console.log(count)
    var snd = new Audio("time.wav");
    snd.play();
    snd.currentTime = 0;
    let con = document.getElementById("con");
    let line = document.getElementById("line");
    line.innerHTML = count;
    if (count > 99999) {
        con.style.fontSize = "9vw";
        con.style.top = "45%";
    }

    count++;
    timeout = setTimeout(counter, 1000);
}
let reset = () => {
    count = 0;
    time = 0;
    var snd = new Audio("reset.wav");
    snd.play();

    document.getElementById("line").innerHTML = count;
    clearTimeout(timeout);
    snd.currentTime = 0;
}

