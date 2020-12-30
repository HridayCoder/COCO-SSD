objects=[];
status="";

function setup()
{
canvas=createCanvas(640,450);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status : detecting objects";
}
function modelLoaded()
{
console.log(" model loaded !");
status=true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
if(error)
{
console.log(error);
}
else
{
console.log(results);
objects=results;
}
}

var img="";
function preload()
{
img=loadImage("dog_cat.jpg");
}

function draw()
{
image(img,0,0,640,450);
if(status !="")
{
for(i=0; i<objects.length; i++)
{
document.getElementById("status").innerHTML="status : objects detected";
stroke('#ff0000');
percent=floor(objects[i].confidence*100);
text(objects[i].label + "  " + percent + "%",objects[i].x,objects[i].y);
noFill();
stroke('#ff0000');
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}