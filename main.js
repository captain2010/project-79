var mouseEvent="empty";
var last_position_x,last_position_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_the_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_the_line=document.getElementById("width_of_the_line").value;
    mouseEvent="mousedown";
    

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mousex=e.clientX-canvas.offsetLeft;
    current_position_of_mousey=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){ctx.beginPath();
    ctx.strokeStyle=color;
ctx.lineWidth=width_of_the_line;
console.log("last_position_xandycoordinate=");
console.log("x=" +last_position_x +"y=" +last_position_y);
ctx.moveTo(last_position_x,last_position_y);
console.log("current_position_xandycoordinate=");
console.log("x=" +current_position_of_mousex +"y=" +current_position_of_mousey);
ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
ctx.stroke();

}
last_position_x=current_position_of_mousex;
last_position_y=current_position_of_mousey;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){mouseEvent="mouseup";}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){mouseEvent="mouseleave";}

