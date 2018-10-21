function setup() {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const FIL1 = document.getElementById("fil1")
    const FIL2 = document.getElementById("fil2")
    const FIL3 = document.getElementById("fil3")
    const FIL4 = document.getElementById("fil4")
    var car = document.getElementById("car");
    var road = document.getElementById("road");
    const LEFT_LANE = 50;

    function move(e) {
        console.log("click");

        if (e.keyCode === RIGHT_KEY) {
            var currentLeft = getCarRight();
            console.log("currentLeft", currentLeft);
            if (currentLeft < 600) {
                currentLeft += 200;
                car.style.left = currentLeft + 'px';
            }
            console.log("currentLeft", currentLeft);
        }

        if (e.keyCode === LEFT_KEY) {
            var currentLeft = getCarLeft();
            console.log("currentLeft", currentLeft);
            if (currentLeft > 50) {
                currentLeft += -200;
                car.style.left = currentLeft + 'px';
            }
            console.log("currentLeft", currentLeft);
        }
        


    }

    function getCarRight() {
        return car.style.left === '' ? 50 : Number(car.style.left.replace("px", ""));
    }

    function getCarLeft() {
        return car.style.left === "" ? 50 : Number(car.style.left.replace("px", ""));
    }
    document.onkeydown = move;
}
    /*
        function move(e) {
            var carLeft = 170;
    
            if (e.keyCode == RIGHT_KEY) {
                console.log("left", carLeft)
                carLeft += 136.8;
                car.style.left = carLeft + 'px';
                if (carLeft >= 500) {
                    carLeft -= 136.8;
                }
                console.log("left", carLeft)
            }
            if (e.keyCode == LEFT_KEY) {
                console.log("right", carLeft)
    
                carLeft -= 136.8;
                car.style.left = carLeft + 'px';
                if (carLeft <= 50) {
                    carLeft += 136.8;
                }
    
                console.log("right", carLeft)
    
            }
        }
    
        document.onkeydown = move;
    }
    
    */
