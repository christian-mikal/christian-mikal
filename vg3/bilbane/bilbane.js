//@ts-check

function setup() {

    const downKeys = new Set();
    let x = 50;
    let y = 200;


    let speed = 5;
    let angle = 0;
    let moveAngle = 1;





    const bil = document.getElementById("bil");
    document.addEventListener("keydown", event => { downKeys.add(event.key) });
    document.addEventListener("keyup", event => { downKeys.delete(event.key) });


    function update() {
        function isDown(key) { return downKeys.has(key) }
        const s = bil.style;

        


        if (isDown("ArrowDown")) { ((s.transform = "rotate(180deg)")) && (s.top = (y += speed) + "px"); }
        if (isDown("ArrowUp")) { ((s.transform = "rotate(0deg)")) && (s.top = (y -= speed) + "px"); }
        if (isDown("ArrowRight")) { (s.transform = "rotate(90deg)") && (s.left = (x += speed) + "px"); }
        if (isDown("ArrowLeft")) { (s.left = (x -= speed) + "px") && (s.transform = "rotate(270deg)"); }

        if ((isDown("ArrowUp") && (isDown("ArrowRight")))) { ((s.transform = "rotate(45deg)")); }
        if ((isDown("ArrowUp") && (isDown("Arrowleft")))) { ((s.transform = "rotate(315deg)")); }
        if ((isDown("ArrowDown") && (isDown("ArrowRight")))) { ((s.transform = "rotate(135deg)")); }
        if ((isDown("ArrowDown") && (isDown("ArrowLeft")))) { ((s.transform = "rotate(225deg)")); }

        window.requestAnimationFrame(update);
    }



    window.requestAnimationFrame(update);


}