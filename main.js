canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");

roverwidth=100;
roverheight=80;
current_position_of_x=100;
current_position_of_y=200;

backgroundimage="mars.jpg";
roverimage="rover.png";

function add() {
    backgroundimage1=new Image();
    backgroundimage1.onload=uploadbackground;
    backgroundimage1.src=backgroundimage;
    roverimage1=new Image();
   roverimage1.onload=uploadrover;
    roverimage1.src=roverimage;
    
}
function uploadbackground() {
ctx.drawImage(backgroundimage1,0,0,canvas.width, canvas.height);

}
function uploadrover() {
    ctx.drawImage(roverimage1,current_position_of_x,current_position_of_y,roverwidth,roverheight);
    
 } 
window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38') {
        up();
        console.log("movingup");
    }
    if (keypressed=='39') {
        right();
        console.log("movingright");
    }
    if (keypressed=='37') {
        left();
        console.log("movingleft");
    }
    if (keypressed=='40') {
        down();
        console.log("movingdown");
    }
    
}
function up() {
    if (current_position_of_y>=0) {
        current_position_of_y=current_position_of_y-10;
        uploadbackground();
        uploadrover();
        console.log("When up arrow is pressed, x = " + current_position_of_x + " | y = " +current_position_of_y);

    }
}
function down() {
    if (current_position_of_y<=600) {
        current_position_of_y=current_position_of_y+10;
        uploadbackground();
        uploadrover();
        console.log("When down arrow is pressed, x = " + current_position_of_x + " | y = " +current_position_of_y);

    }
}
function right() {
    if (current_position_of_x<=800) {
        current_position_of_x=current_position_of_x+10;
        uploadbackground();
        uploadrover();
        console.log("When right arrow is pressed, x = " + current_position_of_x + " | y = " +current_position_of_y);

    }
}
function left() {
    if (current_position_of_x>=0) {
        current_position_of_x=current_position_of_x-10;
        uploadbackground();
        uploadrover();
        console.log("When left arrow is pressed, x = " + current_position_of_x + " | y = " +current_position_of_y);

    }
}
