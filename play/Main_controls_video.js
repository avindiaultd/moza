var config = {
  apiKey: "AIzaSyBjMWFjGpr04xzmQN9y5LlPGLe2NeI5GnY",
  authDomain: "moza-c42fb.firebaseapp.com",
  databaseURL: "https://moza-c42fb-default-rtdb.firebaseio.com/",
  projectId: "moza-c42fb",
  storageBucket: "moza-c42fb.appspot.com",
  messagingSenderId: "256429602324"
};
firebase.initializeApp(config);

var db = firebase.database();

const VIDEO = window.location.href;
const searchParams = new URL(VIDEO).searchParams;
const urlSearchParams = new URLSearchParams(searchParams);
const res = Array.from(urlSearchParams.entries());
const resObject = Object.fromEntries(res);
var equest = res;
equest = equest.toString().replace("id,", "");
//equest = "2";
function Call_Data() {
db.ref('Moza/MCC/Video/' + equest).once('value', function(snapshot) {
    var call = snapshot.val();
    document.title = (call.Title);
    console.log((call.Poster));
    document.getElementById('title').innerHTML = (call.Title);
    document.getElementById('video').poster = (call.Poster);
    document.getElementById('video').src = (call.Video);
    
    document.getElementById('video').load();
});
}
const video = document.querySelector("#video")

document.querySelector(".fa-pause").style.display = "none"

video.addEventListener("timeupdate", () => {
 var s = parseInt(video.currentTime % 60);
    var m = parseInt((video.currentTime / 60) % 60);
  
   var vs = parseInt(video.duration % 60);
    var vm = parseInt((video.duration / 60) % 60);
 document.getElementById("CT").innerHTML = m + ':' + s;
  
if(vs === "NaN"){}else{document.getElementById("VT").innerHTML = vm + ':' + vs;}
  document.querySelector('.inner').max = video.duration;
    let curr = (video.currentTime / video.duration) * 100
    if(video.ended)
  {
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"

    }
    
 //   document.querySelector('.inner').value = (100 / video.duration) * video.currentTime;
    document.querySelector('.inner').value = video.currentTime;
    
  
})
function updateValue(event) {
 //console.log(event.value);
  video.currentTime = event.value;
}
const play = (e) => {
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}

const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}


const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src 
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

const rewind = (e) => {
    video.currentTime = video.currentTime - ((video.duration/1000) * 5)
}

const forward = (e) => {
    video.currentTime = video.currentTime + ((video.duration/1000) * 5)
}
function volme() {
if(video.muted == false){
    document.getElementById('vola').innerHTML = 'volume_off';
    $("#video").prop('muted', true);
}
else{
 document.getElementById('vola').innerHTML = 'volume_up';
    $("#video").prop('muted', false);   
}    
}
function spedme() {
if(document.getElementById('spedc').style.display === 'none') {   
    document.getElementById('spedc').style.display = 'block';
}
else{
  document.getElementById('spedc').style.display = 'none';  
}
}
function slow1() {
    video.playbackRate = 0.25;
    document.getElementById('spedc').style.display = 'none';  
   if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }  
}
function slow2() {
    video.playbackRate = 0.50;
    document.getElementById('spedc').style.display = 'none';  
   if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    } 
}
function slow3() {
    video.playbackRate = 0.75;
    document.getElementById('spedc').style.display = 'none';  
   if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}
function normal() {
    video.playbackRate = 1.0;
    document.getElementById('spedc').style.display = 'none';  
   if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }  
}
function fast1() {
    video.playbackRate = 1.25;
    document.getElementById('spedc').style.display = 'none';  
   if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}
function fast2() {
    video.playbackRate = 1.50;
    document.getElementById('spedc').style.display = 'none';  
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }  
}
function fast3() {
    video.playbackRate = 1.75;
    document.getElementById('spedc').style.display = 'none';  
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}
function quick() {
    video.playbackRate = 2.0;
    document.getElementById('spedc').style.display = 'none';  
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}
function op(){
    alert("This feature is only available on Moza app")
}
//alert(VIDEO);
