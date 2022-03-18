status="";
var img="";
var objects=[];

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}


    
    function preload(){
        img=loadImage("OIP (14).jpg");
    }
  
    function draw(){
        image(img,0,0,600,600);
        
        if(status != ""){
            for(i = 0; i < objects.length ; i ++){
         document.getElementById("status").innerHTML = "status collin object detected";
                fill("#FF0000");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label + " " + percent + "%" , objects[i].x, objects[i].y); 
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }    
        }

}
function modelLoaded(){
    console.log("modelLoaded");
status = true ;
objectDetector.detect(img, gotResult);
}    
function gotResult(error, results){
    if(error){
        console.log(error);
    }
        
    console.log(results);
objects = results; 
}