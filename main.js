object=[];
function preload(){
imag= loadImage("dog_cat.jpg")
}
function setup(){
canvas= createCanvas(640, 420)
canvas.center()
//model load
objectDectation= ml5.objectDetector("cocossd", modelLoaded)
document.getElementById("status").innerHTML= "Status: Object Detecting"
}
function draw(){
image(imag,0,0,640,420)
//text
if(stot != ""){
    document.getElementById("status").innerHTML="Status: Object Detected"
    for (var i = 0; i < object.length; i++) {
percent= floor(object[i].confidence * 100)+"%"
fill("red")
text(object[i].label+" "+percent, object[i].x, object[i].y)
noFill()
stroke("red")
rect(object[i].x,object[i].y,object[i].width,object[i].height )
    }
}
}
stot="";

function modelLoaded(){
    console.log("model loaded")
    stot= true;
objectDectation.detect(imag, gotResult)
}
function gotResult(e,r){
if (e) {
    console.log(e)
} else {
    console.log(r)
    object=r;
}
}