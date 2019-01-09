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

        let angle = (moveAngle * Math.PI / 180);


        if (isDown("ArrowDown")) { ((s.transform = "rotate(180deg)")) && (s.top = (y += speed) + "px"); }
        if (isDown("ArrowUp")) { ((s.transform = "rotate(0deg)")) && (s.top = (y -= speed) + "px"); }
        if (isDown("ArrowRight")) { (s.transform = "rotate(90deg)") && (s.left = (x += speed) + "px"); }
        if (isDown("ArrowLeft")) { (s.left = (x -= speed) + "px") && (s.transform = "rotate(270deg)"); }

        if ((isDown("ArrowUp") && (isDown("ArrowRight")))) { ((s.transform = "rotate(45deg)")) && (s.top = (y -= speed) + "px"); }
       
        window.requestAnimationFrame(update);
    }



    window.requestAnimationFrame(update);


}