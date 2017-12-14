function setup() {
    let divSky = document.getElementById("sky");
    let divSanta = document.getElementById("santa2");
    let stars = divSky.querySelectorAll(".star");
    stars.forEach(stjerne => {
        stjerne.style.left = -120 + Math.floor(Math.random() * 100) + "px";
        stjerne.style.top = -80 + Math.floor(Math.random() * 120) + "px";
    });

    divSanta.addEventListener("click", dropGifts);
    function dropGifts(e) {
        let pakke = document.createElement("div");
        pakke.className = "pakke";
        pakke.style.left = e.screenX + "px";
        pakke.style.top = (e.screenY - 50) + "px";
        divSky.appendChild(pakke);
        sound.play();
        //sound1.play();
    }

    function makeSnow() {
        for (let i = 0; i < 254; i++) {
            let snow = document.createElement('div');
            snow.className = "snow";
            snow.style.left = Math.random() * 100 + "vw";
            snow.style.animationDelay = Math.random() * 5000 + "ms";
            let radius = Math.random() * 10 + 1;
            snow.style.width = radius + "px";
            snow.style.height = radius + "px";
            divSky.appendChild(snow);
        }
    }

    makeSnow();
}


