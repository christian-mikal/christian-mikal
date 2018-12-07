//@ts-check

function setup() {
    //ganske sikker på at jeg lager en Array her altså...
    let divVis = document.getElementById("visluke");
    let lukene = Array.from(document.querySelectorAll(".luke"));
    lukene.forEach(e => {
        e.addEventListener("click", visLuke)});


    let soundHappy = document.getElementById("happy");
    let soundSad = document.getElementById("sad");

    soundHappy.src = "mariodie.wav";
    soundSad.src = "mariodie.wav";

    function visLuke(e) {
        let today = new Date();
        let luke = e.target;
        let nr = Number(luke.innerHTML);
        if (nr > today.getData()) {
            spill(soundSad);
            return;
        }
        spill(soundHappy);
        divVis.style.backgroundImage = `url("${nr}.png")`;
        divVis.style.display = "block";
        divVis.style.animationName = "spin";

        setTimeout(() => divVis.style.display = "none", 2000);
    }

  
       function spill(sound) {
           sound.play();
       }

}

