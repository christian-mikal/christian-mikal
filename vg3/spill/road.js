function setup() {
    var car = document.getElementById("car");
    var road = document.getElementById("road");

    var carLeft = 170;

    function move(e) {

        if (e.keyCode == 39) {
            carLeft += 140;
            car.style.left = carLeft + 'px';
            if (carLeft >= 450) {
                carLeft -= 140;
            }
        }
        if (e.keyCode == 37) {
            carLeft -= 140;
            car.style.left = carLeft + 'px';
            if (carLeft <= 50) {
                carLeft += 140;
            }
        }
    }

    document.onkeydown = move;
}