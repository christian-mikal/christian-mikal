// @ts-check

function setup() {
    let divVis = document.getElementById("vis");
    let lukene = Array.from(document.querySelectorAll(".luke"));
    lukene.forEach( e => e.addEventListener("click", visLuke));

    let soundHappy = document.getElementById("happy");
    let soundSad = document.getElementById("sad");

    soundHappy.src = "mariodie.wav";
    soundSad.src = "mariodie.wav";
    


    
    function visLuke(e) {
      let today = new Date();
      let t = e.target;
      let nr = Number(t.innerHTML);
      if (nr > today.getDate()) {
        spill(soundSad);
        return;
      }
      spill(soundHappy);
      divVis.style.backgroundImage = `url("${nr}.png")`;
      divVis.style.display = "block";
      setTimeout(() =>  divVis.style.display = "none", 2000);
    }
  }


  function spill(sound) {
    sound.load();
    sound.play();

  }