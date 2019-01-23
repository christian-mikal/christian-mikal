//@ts-check

function setup() {
    let canvas = document.querySelector("canvas");

   /* canvas.width = 400;
    canvas.height = 400;

    let c = canvas.getContext("2d");
    let radius = canvas.height / 2;
    c.translate(radius, radius);
    radius = radius *0.9;
    drawClock();

    function drawClock() {
        c.arc(0,0,radius, 0, 2 * Math.PI);
        c.fillStyle = "white";
        c.fill();
        
    }
    */

   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;

   let c = canvas.getContext("2d");

    c.beginPath();
    c.strokeStyle = "black";
    c.moveTo(50,300);
    c.lineTo(40,90);
    c.lineTo(50,800);
    c.stroke();

}