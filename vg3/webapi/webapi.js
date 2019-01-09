//@ts-check

function setup() {
    let divMain = document.getElementById("main");
    let bil = document.createElement("div");
    bil.className = "bil";
    divMain.appendChild(bil);

    document.addEventListener("keydown", styrBil);

    function styrBil(e) {
        switch (e.key) {
            case "a":
                driveLeft();
                break;
            case "w":
                driveUp();
                break;
            case "d":
                driveRight();
                break;
            case "s":
                driveDown();
                break;
        }
    }
    function driveLeft() {

    }
    function driveUp() { }
    function driveRight() {
        let carDriving = [
            { transform: ' translateX(0px)' },
            { transform: ' translateX(400px)' },
        ];
        bil.animate(
            carDriving,
            carTiming
        )
    }
    function driveDown() { }




    let carTiming = {
        duration: 3000,
        iterations: Infinity
    }

}

