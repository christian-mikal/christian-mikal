// @ts-check


function setup() {
    let btnStart = document.getElementById("start");
    let sound = document.getElementById("sound");
    let divBakgrunn = document.getElementById("bakgrunn");
    let divFly = document.getElementById("fly");
    let divFlyplass = document.getElementById("flyplass");
    

    btnStart.addEventListener("click", play);


    // Merk: denne gir feilmelding
    // avspilling av lyd MÅ startes av bruker ved klikk
    // Lag en løsning slik at animasjonen startes ved
    // klikk på en knapp
   


    function play() {
        setTimeout(timeout, 8000);
        divBakgrunn.style.display ="block";
        btnStart.style.display = "none";
        divFly.style.display = "block";
    }
    function timeout() {
        sound.play();
    }
}