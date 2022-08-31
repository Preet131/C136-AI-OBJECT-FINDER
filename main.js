status = ""
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(600, 400);

}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detected Objects";
    document.getElementById("input") = ""
}

function modelLoaded(){
    console.log("Model Loaded!")
}
function draw(){
    image(video, 0, 0, 600, 400)

}