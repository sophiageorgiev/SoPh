var canvas=new fabric.canvas ("myCanvas");
player_X=10;
player_Y=10;
block_image_width=30;
block_image_height=30;
var player_object=" ";
var block_image_object=" ";
function player_update(){
    fabric.image.fromURL("player.png",function(Img) {
        player_object=Img;
        player_object.scaletowidth(150);
        player_object.scaletoheight(140);
        player_object.set({
            top:player_Y,left:player_X
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaletowidth(150);
        block_image_object.scaletoheight(140);
        block_image_object.set({
            top:player_Y,left:player_X
        });
        canvas.add(block_image_object);
    });
    }
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{keyPressed=e.keyCode;
console.log(keyPressed);
if (e.shiftKey==true &&keyPressed=='80'){
    console.log("p and shift pressed together");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
} 
if (e.shiftKey==true &&keyPressed=='77'){
    console.log("m and shift pressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
} 
 if (keyPressed=='38'){
  up();
  console.log("up");
 }
 if (keyPressed=='40'){
    up();
    console.log("down");
   }
   if (keyPressed=='37'){
    up();
    console.log("left");
   }
   if (keyPressed=='39'){
    up();
    console.log("right");
   }
   if (keyPressed=='87'){
    new_image('wall.jpg');
    console.log("w");
   }
   if (keyPressed=='71'){
    new_image('ground.png');
    console.log("g");
   }
   if (keyPressed=='76'){
    new_image('light_green.png');
    console.log("l");
   }
   if (keyPressed=='84'){
    new_image('trunk.jpg');
    console.log("t");
   }
   if (keyPressed=='82'){
    new_image('roof.jpg');
    console.log("r");
   }
   if (keyPressed=='89'){
    new_image('yellow_wall.png');
    console.log("y");
   }
   if (keyPressed=='68'){
    new_image('dark_green.png');
    console.log("d");
   }
   if (keyPressed=='85'){
    new_image('unique.png');
    console.log("u");
   }
   if (keyPressed=='67'){
    new_image('cloud.jpg');
    console.log("c");
   }
}
function up(){
    if (player_Y>=0){
        player_Y=player_Y-block_image_height;
        console.log("block image height=" +block_image_height);
        console.log("when up arrow key is pressed,X=" +player_X+",Y=" +player_Y);
        canvas.remove(player_object);
        player_update()
    }
}
function down(){
    if (player_Y<=500){
        player_Y=player_Y+block_image_height;
        console.log("block image height=" +block_image_height);
        console.log("when down arrow key is pressed,X=" +player_X+",Y=" +player_Y);
        canvas.remove(player_object);
        player_update()
    }
}
function left(){
    if (player_X>0){
        player_X=player_X-block_image_width;
        console.log("block image width=" +block_image_width);
        console.log("when left arrow key is pressed,X=" +player_Y+",Y=" +player_Y);
        canvas.remove(player_object);
        player_update()
    }
}
function right(){
    if (player_X<=850){
        player_X=player_X+block_image_width;
        console.log("block image width=" +block_image_width);
        console.log("when right arrow key is pressed,X=" +player_Y+",Y=" +player_Y);
        canvas.remove(player_object);
        player_update()
    }
}