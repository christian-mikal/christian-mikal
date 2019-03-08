//@ts-check

function setup1() {

    const downKeys = new Set();
    let x = 50;
    let y = 200;
    let bane = document.getElementById("bane");

    const bil = document.getElementById("bil");
    document.addEventListener("keydown", event => { downKeys.add(event.key) });
    document.addEventListener("keyup", event => { downKeys.delete(event.key) });


    function update() {
        function isDown(key) { return downKeys.has(key) }
        const s = bil.style;

        const speed = isDown(" ") ? 10 : 5;
        if (isDown("ArrowDown")) { ((s.transform = "rotate(180deg)")) && (s.top = (y += speed) + "px"); }
        if (isDown("ArrowUp")) { ((s.transform = "rotate(0deg)")) && (s.top = (y -= speed) + "px"); }
        if (isDown("ArrowRight")) { (s.transform = "rotate(90deg)") && (s.left = (x += speed) + "px"); }
        if (isDown("ArrowLeft")) { (s.left = (x -= speed) + "px") && (s.transform = "rotate(270deg)"); }

        if ((isDown("ArrowUp") && (isDown("ArrowRight")))) { ((s.transform = "rotate(45deg)")); }
        if ((isDown("ArrowUp") && (isDown("ArrowLeft")))) { ((s.transform = "rotate(315deg)")); }
        if ((isDown("ArrowDown") && (isDown("ArrowRight")))) { ((s.transform = "rotate(135deg)")); }
        if ((isDown("ArrowDown") && (isDown("ArrowLeft")))) { ((s.transform = "rotate(225deg)")); }
     
        window.requestAnimationFrame(update);
    }
    window.requestAnimationFrame(update);
}

function setup2() {

    const downKeys = new Set();
    let x = 50;
    let y = 200;

    const bil2 = document.getElementById("bil2");
    document.addEventListener("keydown", event => { downKeys.add(event.key) });
    document.addEventListener("keyup", event => { downKeys.delete(event.key) });


    function update2() {
        function isDown(key) { return downKeys.has(key) }
        const s2 = bil2.style;

        const speed = isDown(" ") ? 10 : 5;
        if (isDown("s")) { ((s2.transform = "rotate(180deg)")) && (s2.top = (y += speed) + "px"); }
        if (isDown("w")) { ((s2.transform = "rotate(0deg)")) && (s2.top = (y -= speed) + "px"); }
        if (isDown("d")) { (s2.transform = "rotate(90deg)") && (s2.left = (x += speed) + "px"); }
        if (isDown("a")) { (s2.left = (x -= speed) + "px") && (s2.transform = "rotate(270deg)"); }

        if ((isDown("w") && (isDown("d")))) { ((s2.transform = "rotate(45deg)")); }
        if ((isDown("w") && (isDown("a")))) { ((s2.transform = "rotate(315deg)")); }
        if ((isDown("s") && (isDown("d")))) { ((s2.transform = "rotate(135deg)")); }
        if ((isDown("s") && (isDown("a")))) { ((s2.transform = "rotate(225deg)")); }

        window.requestAnimationFrame(update2);
    }


    window.requestAnimationFrame(update2);
}