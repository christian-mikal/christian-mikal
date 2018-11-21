// @ts-check

function startGame() {
    let divBoard = document.getElementById("brett");
    let divPoeng = document.getElementById("poeng");
    let btnOmstart = document.querySelector("omstart");

    let poeng = 1;

    let apple;
    const BRETT = { w: 30, h: 20 };
    const SIZE = 20;
    let v = { x: 1, y: 0 };

    let gameTimer;

    let segments = [];
    let head = 0;

    function makeSegment(pos) {
        let s = document.createElement("div");
        s.className = "snake";
        divBoard.appendChild(s);
        s.pos = { x: pos.x, y: pos.y };
        segments.push(s);
        place(s);
    }

    function place(element) {
        let pos = element.pos;
        element.style.transform = "translate(" + pos.x * SIZE + "px," + pos.y * SIZE + "px)";
    }

    function makeApple() {
        if (!apple) {
            apple = document.createElement("div");
            apple.className = "apple";
            divBoard.appendChild(apple);
            apple.pos = { x: 0, y: 0 };
        }
        apple.pos.x = Math.floor(Math.random() * BRETT.w);
        apple.pos.y = Math.floor(Math.random() * BRETT.h);
        place(apple);
    }




    setTimeout(reallyStartTheGame, 0.1 * 1000);

    document.addEventListener("keydown", saveKey);


    function reallyStartTheGame() {
        divBoard.innerHTML = "";

        gameTimer = setInterval(gameLoop, 60);
        makeApple();
        makeSegment({ x: 10, y: 10 });
        divBoard.style.width = BRETT.w * SIZE + "px";
        divBoard.style.height = BRETT.h * SIZE + "px";
        divBoard.style.backgroundColor = "black";
        divBoard.style.position = "relative";
        divBoard.style.left = "25%";
        divBoard.style.top = "110px";
        divPoeng.style.position = "relative";
        btnOmstart.addEventListener("click", startSpill);

        /* divBoard.style.display = "flex";
         divBoard.style.alignItems = "center";
         divBoard.style.justifyContent = "center";
     */
    }

    function startSpill() {
        gameTimer = setInterval(gameLoop, 1000);
        divBoard.innerHTML = "";
        segments = [];
        head = 0;
        makeApple();
        makeSegment({ x: 10, y: 10 });
    }

    function gameLoop() {
        let l = segments.length;
        let tail = (head + 1) % l;
        let tseg = segments[tail];
        let hseg = segments[head];
        tseg.pos.x = (hseg.pos.x + v.x + BRETT.w) % BRETT.w;
        tseg.pos.y = (hseg.pos.y + v.y + BRETT.h) % BRETT.h;
        head = tail;
        place(tseg);
        if (tseg.pos.x === apple.pos.x &&
            tseg.pos.y === apple.pos.y) {
            makeSegment(tseg.pos);
            makeApple();
            poeng *= 2;
            divPoeng.innerHTML = "poeng: " + poeng;

        } else sjekkSlange();
    }

    function sjekkSlange() {
        let h = segments[head];
        for (let i = 0; i < segments.length; i++) {
            if (i === head) continue;
            let s = segments[i];
            if (s.pos.x === h.pos.x && s.pos.y === h.pos.y) {
                divBoard.style.backgroundColor = "yellow";
                divBoard.innerHTML = `<h1>GAME OVER</h1> you only got ${poeng} points`
                clearInterval(gameTimer);
                btnOmstart.style.left = "300px";
            }
        }
    }

    function saveKey(e) {
        let k = e.keyCode;
        switch (k) {
            case 37:
                v.x = -1; v.y = 0;
                break;
            case 38:
                v.x = 0; v.y = -1;
                break;
            case 39:
                v.x = 1; v.y = 0;
                break;
            case 40:
                v.x = 0; v.y = 1;
                break;
        }
    }
}