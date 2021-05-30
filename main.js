var canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");
color= "red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 2;
ctx.arc(200,200,40,0,2*Math.PI);
    ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e) {
   mouse_X= e.clientX;
   mouse_Y= e.clientY; 
   console.log("X="+mouse_X+"Y="+mouse_Y);
   circle(mouse_X,mouse_Y);
}

function circle(mouse_X,mouse_Y) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= 2;
    ctx.arc(mouse_X,mouse_Y,40,0,2*Math.PI);
    ctx.stroke();
}



