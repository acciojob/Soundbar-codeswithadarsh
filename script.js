//your JS code here. If required.
let applause = document.getElementById("applause");
let inaudio=document.getElementById("applauseAudio");
let booaudio=document.getElementById("booAudio");
let gaspaudio=document.getElementById("gaspAudio");
let tadaaudio=document.getElementById("tadaAudio");
let victoryaudio=document.getElementById("victoryAudio");
let wrongaudio=document.getElementById("wrongAudio");

applause.addEventListener("click",()=>{
   
   inaudio.play();
})

let boo = document.getElementById("boo");

boo.addEventListener("click",()=>{
  
   booaudio.play();
})

let gasp = document.getElementById("gasp");

gasp.addEventListener("click",()=>{
  
   gaspaudio.play();
})

let tada = document.getElementById("tada");

tada.addEventListener("click",()=>{
   
   tadaaudio.play();
})

let victory = document.getElementById("victory");

victory.addEventListener("click",()=>{
   
   victoryaudio.play();
})

let wrong = document.getElementById("wrong");

wrong.addEventListener("click",()=>{
   
   wrongaudio.play();
})

let pause = document.getElementById("pause");

pause.addEventListener("click",()=>{
   inaudio.pause();
   booaudio.pause();
   gaspaudio.pause();
   tadaaudio.pause();
   victoryaudio.pause();
   wrongaudio.pause();
})