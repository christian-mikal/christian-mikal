// @ts-check

// Her definerer vi egenskaper for en ball
class Ball {
    constructor(x,y,vx,vy,w=26,h=26) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.w = w;
        this.h = h;
        this.div = document.createElement("div");
        this.div.className = "ball";
    }
    // oppdater posisjonen på nettsida
    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
    // oppdater x,y basert på farten til ballen
    flytt() {
        this.x += this.vx;
        this.y += this.vy;
    }
    static leggtil() {}
}



// klargjør spillet - lag koblinger til html
// setter opp slik at alt er klart
function setup() {
    let divBoard = document.getElementById("board");
    let divMain = document.getElementById("main");
    let btnStart = document.getElementById("start");

    btnStart.addEventListener("click", startSpillet);


    // kobla til knappen som starter spillet
    function startSpillet(e) {
        divBoard.removeChild(btnStart);

        divBoard.addEventListener("click", leggTilBall);

        let baller = [];
        for (let i = 0; i < 1; i++) {
            let x = Math.random() * 520;
            let y = Math.random() * 520;
            let vx = Math.random() * 10 - 5;
            let vy = Math.random() * 10 - 5;
            let ball = new Ball(x,y,vx,vy);
            ball.render();
            divBoard.appendChild(ball.div);
            baller.push(ball);
        }

        setInterval(animering, 20);

        setInterval(addNewBalls, 50);

        // nye baller legges til med en timer
        function addNewBalls() {
            if (baller.length > 20) return;
            nyBall();
        }

        function leggTilBall(e) {
            let x = e.offsetX;
            let y = e.offsetY;
            let vx = Math.random() * 10 - 5;
            let vy = Math.random() * 10 - 5;
            let ball = new Ball(x,y,vx,vy);
            ball.render();
            divBoard.appendChild(ball.div);
            baller.push(ball);

        }

        function nyBall() {
            let x = Math.random() * 520;
            let y = Math.random() * 520;
            let vx = Math.random() * 10 - 5;
            let vy = Math.random() * 10 - 5;
            let ball = new Ball(x,y,vx,vy);
            ball.render();
            divBoard.appendChild(ball.div);
            baller.push(ball);
        }

        // vi skal flytte alle ballene som er på skjermen
        // ballene er lagra i arrayet baller
        // itererer gjennom arrayet og flytter hver enkelt ball
        function animering() {
            for (let i = 0; i < baller.length; i++) {
                let ball = baller[i];
                ball.flytt();
                ball.render();
                if (ball.x > 550-26) {
                    ball.vx = -Math.abs(ball.vx);
                }
                if (ball.x < 0) {
                    ball.vx = Math.abs(ball.vx);
                }
                if (ball.y > 550-26) {
                    ball.vy = -Math.abs(ball.vy);
                }
                if (ball.y < 0) {
                    ball.vy = Math.abs(ball.vy);
                }
            }
            // sjekker kollisjon mellom ballene
            // ball 1 sjekker mot ball 2,3,...
            // ball 2 sjekker mot ball 3,4,...
            // osv
            for (let i = 0; i < baller.length; i++) {
                let a = baller[i];
                for (let j = i+1; j < baller.length; j++) {
                    let b = baller[j];
                    if (kollisjon(a, b)) {
                        // vi har oppdaga en kollisjon
                        // vi bytter vx på ballene
                        let v = a.vx;
                        a.vx = b.vx;
                        b.vx = v;
                    }
                }
            }
        }

        function kollisjon(a, b) {
            if (
                +a.x > +b.x - +a.w &&
                +a.x < +b.x + +b.w &&
                +a.y > +b.y - +a.h &&
                +a.y < +b.y + +b.h
            ) {
                return true;
            } else {
                return false;
            }
        }

    }
    const downKeys = new Set();
    let x = 50;
    let y = 200;

    const bil = document.getElementById("bil");
    document.addEventListener("keydown", event => { downKeys.add(event.key) });
    document.addEventListener("keyup", event => { downKeys.delete(event.key) });


    function update() {
        function isDown(key) { return downKeys.has(key) }
        const s = bil.style;

        const speed = isDown(" ") ? 5 : 1;
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