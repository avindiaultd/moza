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

function Call_Data() {
db.ref('Moza/MCC/Video/').once('value', function(snapshot){
        if(snapshot.exists()){
 snapshot.forEach(function(childSnapshot){
                var val = childSnapshot.val();
                var key = childSnapshot.key;
   var Poster = String((val.Poster));
   var Title = (val.Title);
     var View = (val.Views);
     var U = String((childSnapshot.child('Upload Time').val()));
   var VideoNumber = (childSnapshot.child('Video Number').val());
   var ProfilePicture = (childSnapshot.child('Profile Picture').val());
   var ProfileName = (childSnapshot.child('Profile Name').val());
Poster = Poster.replaceAll('\\' , "");
Poster = Poster.replace(/'/ , "");
Poster = Poster.replace(/"/ , "");
ProfilePicture = ProfilePicture.replaceAll('\\' , "");
ProfilePicture = ProfilePicture.replace(/'/ , "");
ProfilePicture = ProfilePicture.replace(/"/ , "");
VideoNumber = VideoNumber.replace(/"/ , "");
VideoNumber = VideoNumber.replace(/'/ , "");
U = U.replace(/"/ , "");
U = U.replace(/'/ , "");     
U = U.replaceAll('\\' , "");
U = U.replace(/'/ , "");
U = U.replace(/"/ , "");     
Title = Title.replace(/'/ , "");
Title = Title.replace(/'/ , "");
ProfileName = ProfileName.replace(/'/ , "");
ProfileName = ProfileName.replace(/"/ , "");
ProfileName = ProfileName.replace(/'/ , "");
ProfileName = ProfileName.replace(/"/ , "");
document.getElementById("time").value = U;     
var UT = new Date(document.getElementById("time").value);
var NOW = Date.now();
var DIFF = [NOW - UT] / 60000;
var ago = "";    
if(DIFF > 525600){
if([Math. floor(DIFF / 525600)] < 2){    
ago = [Math. floor(DIFF / 525600)] + " year ago" ;    
}
else{
ago = [Math. floor(DIFF / 525600)] + " years ago" ;        
}    
}
else{
if(DIFF > 43200){
if([Math. floor(DIFF / 43200)] < 2){    
ago = [Math. floor(DIFF / 43200)] + " month ago" ;    
}
else{    
ago = [Math. floor(DIFF / 43200)] + " months ago" ;    
}
}else{
if(DIFF > 10080){
if([Math. floor(DIFF / 10080)] < 2){    
ago = [Math. floor(DIFF / 10080)] + " week ago" ;    
}
else{    
ago = [Math. floor(DIFF / 10080)] + " weeks ago" ;    
}
}else{
if(DIFF > 1440){
if([Math. floor(DIFF / 1440)] < 2){    
ago = [Math. floor(DIFF / 1440)] + " day ago" ;    
}
else{    
ago = [Math. floor(DIFF / 1440)] + " days ago" ;    
}
}else{
if(DIFF > 60){
if([Math. floor(DIFF / 60)] < 2){    
ago = [Math. floor(DIFF / 60)] + " hour ago" ;    
}
else{    
ago = [Math. floor(DIFF / 60)] + " hours ago" ;    
}
}else{
if(DIFF > 1){
if([Math. floor(DIFF / 1)] < 2){    
ago = [Math. floor(DIFF / 1)] + " minute ago" ;    
}
else{    
ago = [Math. floor(DIFF1 / 1)] + " minutes ago" ;  
}    
}else{
ago = "just now";    
}        
}        
}        
}        
}    
}         
     
     
document.getElementById("Container").innerHTML += '<a id="moza-7" href="./' + VideoNumber + '"><div class="content"><div class="poster"><img src="' + Poster + '"></div></a><div class="info"><div class="title"><div class="pp"><img src="' + ProfilePicture + '"></div><h1>' + Title + '<br><div class="pinfo"><h6>' + ProfileName + '&nbsp;&nbsp;&nbsp;' + View + ' views' + '&nbsp;&nbsp;&nbsp;' + ago + '</h6></div></h1><div class="dropdown"><i class="material-icons md-25" id="dbt">more_vert</i>  <div class="dropdown-content"><!--<a id="'+ VideoNumber +'" onclick="share_to()">Share</a>--><a href="#">Download</a><a>No more features available at this time</a></div></div></div></div></div>';
          });
        }
   });
if(localStorage.getItem("login") == "true"){
    db.ref('Moza/Users/' + localStorage.getItem("phone_number")).once('value', function(snapshot) {
  var data = snapshot.val();
  var pp = snapshot.child("Profile Pic").val();
pp = pp.replaceAll('\\' , "");
pp = pp.replace(/'/ , "");
pp = pp.replace(/"/ , "");  
pp = pp.replace(/'/ , "");
pp = pp.replace(/"/ , "");          
document.getElementById("you_pp").src = pp;   
//console.log(pp);        console.log(this.id);
}); 
}
else{
document.getElementById("overlay").style.display = "block"; document.getElementById("login_form").style.display = "block";
}    
}

function bbb() {
     var t = $(this).attr('id');
 const buttons = document.getElementsByTagName("button");
const buttonPressed = e => {
  console.log(e.target.id);  // Get ID of Clicked Element
}
for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}   
if (navigator.share) {
    navigator.share({
      title: '',
      url: ''
    }).then(() => {
      console.log('');
    })
    .catch(console.error);
  } else {
    // fallback
  }  
    //document.getElementById('dbt_1').style.display = "none";localStorage.setItem("login", "");localStorage.setItem("phone_number", "");  
 //console.log(localStorage.getItem("login"));
//console.log(localStorage.getItem("phone_number"));    
 // document.getElementById("you").src = "https://firebasestorage.googleapis.com/v0/b/moza-post.appspot.com/o/8851772685A.png?alt=media&token=73a058e8-4c47-406c-8cfe-d3204ee929af%27";
    
}


function generateOTP() {
    let digits =
'0123456789';
    let OTP = '';
    let len = digits.length
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * len)];
    }
    return OTP; 
}

function pro_ok() {
        db.ref('Moza/Users/' + document.getElementById("pn__l").value).once('value', function(snapshot) {
  var data = snapshot.val();
            
  var pn = snapshot.child("Phone Number").val();
            
if(pn === null){
    pn = "false";
}else{
    pn = pn.replace(/'/ , "");
    pn = pn.replace(/"/ , "");
    pn = pn.replace(/'/ , "");
    pn = pn.replace(/"/ , "");
}           
//console.log(pn);
var pn_input = document.getElementById("pn__l"); 
var pw_input = document.getElementById("p__l");             

if(pn === pn_input.value){
    
var pw = snapshot.child("Password").val();
    
if(pw == pw_input.value){
    
localStorage.setItem("login", "true");
localStorage.setItem("phone_number", pn);  
location.reload();       
}else{
document.getElementById("error").innerHTML = "Wrong Password please check !";}
//console.log("Wrong Password please check !");
//console.log(pw);    
}else{
document.getElementById("error").innerHTML = "You don't have any account on Moza";}   
// console.log(pn);
 });
}
function pro_ok_2() {
var pn_r = document.getElementById("pn__r").value;
var pw_r = document.getElementById("p__r").value;
var nm_r = document.getElementById("n__r").value;  
if(pn_r.length < 10 || pn_r.length > 10){
document.getElementById("error_2").innerHTML = "Please enter 10 digit phone number";
}else{
if(pw_r.length < 8){document.getElementById("error_2").innerHTML = "Please enter 8 digit password";}else{if(nm_r.length > 50 || nm_r.length < 1){document.getElementById("error_2").innerHTML = "You can use only 50 characters to name or enter your name";}else{
db.ref('Moza/Users/' + document.getElementById("pn__r").value).once('value', function(snapshot) {    
var pn_check = snapshot.child("Phone Number").val();
if(pn_check === null){
    pn_check = "false";
}else{
    pn_check = pn_check.replace(/'/ , "");
    pn_check = pn_check.replace(/"/ , "");
    pn_check = pn_check.replace(/'/ , "");
    pn_check = pn_check.replace(/"/ , "");
}    
if(pn_check === pn_r){
document.getElementById("error_2").innerHTML = "You already on Moza! login now";    
}else{
localStorage.setItem("login", "true");
localStorage.setItem("phone_number", pn_r);  
    location.reload();
firebase.database().ref('Moza/Users/' + pn_r).set({
'Phone Number': pn_r,
ProfileName: nm_r,
Password: pw_r    
});    
}     
});      
}}
 }   
}
function l__(){
document.getElementById("login_form").style.display = "block";
document.getElementById("regis_form").style.display = "none";    
}
function r__(){
document.getElementById("regis_form").style.display = "block";    
document.getElementById("login_form").style.display = "none";        
}
   // if(pw_r.length < 8){document.getElementById("error_2").innerHTML = "Please enter 8 digit password";}else{if(nm_r.length > 50){document.getElementById("error_2").innerHTML = "You don't have any account on Moza";}else{}}
const keyOfDynamicHtmlItemRef = new URL(window.location).searchParams.get("share")
if (keyOfDynamicHtmlItemRef) {
  var dynamicHtmlListRef = firebase.database().ref('dynamic_html');
  var dynamicHtmlItemRef = dynamicHtmlListRef.child(keyOfDynamicHtmlItemRef);
  keyOfDynamicHtmlItemRef.once("value").then(dynamicHtmlSnap => {
    document.querySelector(".dynamic-html-mountpoint").innerHTML = dynamicHtmlSnap.val();
  });
} 
function share_to(){
    
var cur_id = this.id;    
db.ref('Moza/MCC/Video/' + this.id).once('value', function(snapshot) {
  var data = snapshot.val();
console.log(cur_id);
    const til = (data.Title);
    if (navigator.share) {
    navigator.share({
      title: 'gggg',
      url: 'https://avindiaultd.github.io/p/moza/v/'
    }).then(() => {
      //console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    // fallback
  }  
});    
}