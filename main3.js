img="";
status="";
objects=[];
function preload(){
   img=loadImage("fruit_basket.jpg"); 
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status3").innerHTML="Status :Detecting Objects";

}

function ModelLoaded(){
   console.log("Model Loaded!!!");
   status=true;
   objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
if(error){
    console.error(error);
}
console.log(results);
objects=results;
}

function draw(){
    image(img,0,0,640,420);
      
    if(status !=""){
        for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML="status=object Detected";

        fill("#FF0000");
        percent=floor(objects[i].confidence*100);
       text(objects[i].label +""+percent+"%",objects[i].x,objects[i].y);
       noFill();
       stroke("#FF0000");
       rect(objects[i].x,objects[i].y, objects[i].y,objects[i].y);
        }
    }
}
