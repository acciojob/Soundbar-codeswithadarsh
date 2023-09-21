//your JS code here. If required.
const soundArray = [
    "./mp3/applause-01.mp3",
    "./mp3/boo.mp3",
    "./mp3/gasp.mp3",
    "./mp3/tada.mp3",
    "./mp3/victory.mp3",
    "./mp3/wrong.mp3",
    "./mp3/stop.mp3"
];

const applause = document.getElementById("applause");
const boo = document.getElementById("boo");
const gasp = document.getElementById("gasp");
const tada = document.getElementById("tada");
const victory = document.getElementById("victory");
const wrong = document.getElementById("wrong");
const stopp = document.getElementById("stop");
var audio;

function playSample(index) {
    if (audio) {
        audio.pause();
    }
    audio = new Audio(soundArray[index]);
    audio.play();
}


applause.addEventListener("click", function () {
    playSample(0);
});

boo.addEventListener("click", function () {
    playSample(1);
});

gasp.addEventListener("click", function () {
    playSample(2);
});

tada.addEventListener("click", function () {
    playSample(3);
});

victory.addEventListener("click", function () {
    playSample(4);
});

wrong.addEventListener("click", function () {
    playSample(5);
});

stopp.addEventListener("click", function () {
    playSample(6);
});