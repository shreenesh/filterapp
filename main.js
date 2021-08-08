function   take_snapshot(){
    save("image.png");
}
function preload() {

}

function setup() {
canvas=createCanvas(640,480);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();
tcolour="";
}

function draw() {
image(video,0,0,640,480);
tint(tcolour);
}
function fliter_tint(){
    tcolour=document.getElementById("colour_name").value ;
}