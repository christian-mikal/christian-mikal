function setup() {
    var car = document.getElementById("car");
    var road = document.getElementById("road");

    var carLeft = 150;

    function move(e) {

        if (e.keyCode == 39) {
            carLeft += 30;
            car.style.left = carLeft + 'px';
            if (carLeft >= 390) {
                carLeft -= 30;
            }
        }
        if (e.keyCode == 37) {
            carLeft -= 30;
            car.style.left = carLeft + 'px';
            if (carLeft <= 30) {
                carLeft += 30;
            }
        }
    }

    document.onkeydown = move;
    
}
