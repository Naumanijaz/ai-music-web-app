var leftwristx=0
var leftwristscore=0
var rightwristscore=0
var rightwristx=0
var leftwristy=0
var rightwristy=0
function setup(){
canvas=createCanvas(600,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotresults)
}
function gotresults(results){
    if(results.length>0){
     console.log(results)
    leftwristx=results[0].pose.leftWrist.x
    rightwristx=results[0].pose.rightWrist.x
    leftwristy=results[0].pose.rightWrist.y
    rightwristy=results[0].pose.leftWrist.y
    rightwristscore=results[0].pose.keypoints[9].score
    leftwristscore=results[0].pose.keypoints[10].score
    }
    }
function draw(){
image(video,0,0,600,500)
stroke("red")
fill("red")
if (rightwristscore>0.2){
    circle(rightwristx,rightwristy,20)
if(rightwristy>0 && rightwristy<100){
    song.rate(0.5)
    document.getElementById("speeder1").innerHTML="speed=0.5x"

}
else if(rightwristy>100 && rightwristy<200){
    song.rate(1)
    document.getElementById("speeder1").innerHTML="speed=1x"

}
 else if(rightwristy>200 && rightwristy<300){
    song.rate(1.5)
    document.getElementById("speeder1").innerHTML="speed=1.5x"

}
else if(rightwristy>300 && rightwristy<400){
    song.rate(2)
    document.getElementById("speeder1").innerHTML="speed=2x"

}
else if(rightwristy>400 && rightwristy<500){
    song.rate(2.5)
    document.getElementById("speeder1").innerHTML="speed=2.5x"
}}
if (leftwristscore>0.2){
circle(leftwristx,leftwristy,20)
leftinnumber=Number(leftwristy)
removedecimals=floor(leftinnumber)
var volume=removedecimals/500
song.setVolume(volume)
document.getElementById("volume").innerHTML="volume ="+volume
}}
function preload(){
song=loadSound("music.mp3")
}
song=""
function playsong(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function modelloaded(){
    console.log("model is loaded")
}