const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour1; 
function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    getBackgroundImg();
    //hour1 = datetime.slice(11,13);
}

function draw(){

    // add condition to check if any background image is there to add
     if(backgroundImg){
         background(backgroundImg);
     }

    Engine.update(engine);

    // write code to display time in correct format here
     noStroke();
     textSize(30);
     fill("black");
     text("TIME: "+ hour1, width-500, 70);

}

async function getBackgroundImg(){

    // write code to fetch time from API
     var response = await fetch("http://worldclockapi.com/api/json/est/now");
    
     //change the data in JSON format
     var responseJSON = await response.json();
     var datetime = responseJSON.currentDateTime;
    // write code slice the datetime
     var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
     if(hour >= 04 && hour <= 06 ){
         bg = "sunrise1.png";
         hour1 ="5 am";
     }else if(hour >= 05 && hour <= 07 ){
        bg = "sunrise2.png";
        hour1 ="6 am";
    }else if(hour >= 07 && hour <= 08 ){
        bg = "sunrise3.png";
        hour1 ="8 am";
        
    }else if(hour >= 09 && hour <= 11 ){
        bg = "sunrise4.png";
        hour1 ="9-10 am";
    }else if(hour >= 11 && hour <= 13 ){
        bg = "sunrise5.png";
        hour1 ="12 pm";
    }else if(hour >= 13 && hour <= 15 ){
        bg = "sunrise6.png";
        hour1 ="2 pm";
    }else if(hour >= 15 && hour <= 17 ){
        bg = "sunset7.png";
        hour1 ="4 pm";
    }else if(hour >= 16 && hour <= 18 ){
        bg = "sunset8.png";
        hour1 ="5 pm";
    }else if(hour >= 17 && hour <= 19 ){
        bg = "sunset9.png";
        hour1 ="6 pm";
    }else if(hour >= 19 && hour <= 21 ){
        bg = "sunset10.png";
        hour1 ="8 pm";
    }else if(hour >= 21 && hour <= 23 ){
        bg = "sunset11.png";
        hour1 ="10 pm";
    }else{
        bg = "sunset12.png";
        hour1 ="12 am";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    
 //console.log(hour >= 09 && hour <= 011);
}
