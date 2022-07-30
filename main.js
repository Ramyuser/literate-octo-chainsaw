function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide()
}

function draw() {
    image(video, 0, 0, 380, 380);
    if (status != "") {
        objectDetector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%".objects[i].x + 15, objects[i].y + 15);
            nofill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    if (objects[i].label == Object_name) {
        video.stop();
        objectDetector.detect(gotResult);
        document.getElementById("status").innerHTML = Object_name + "Found";
        synth = window.speechSynthesis;
        utterThis = new SpeechSynthesisUtterance(Object_name + "found");
        synth.speak(utterThis);
    } else {
        document.getElementById().innerHTML = Object_name + "not Found";
    }

}
video = "";
objects = [];
status = "";

function preload() {

}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementsById("status").innerHtml = "Status: Detecing Objects";
    document.getElementById("Object_name").value;
}


function modelLoaded() {
    console.log("model Loaded");
    status = true;

}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    objects = result;
}