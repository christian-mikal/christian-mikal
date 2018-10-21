//@ts-check

let deltakere = [];

class Deltaker {
    constructor(navn, alder, kjonn, vekt) {
        this.navn = navn;
        this.alder = alder;
        this.kjonn = kjonn;
        this.vekt = vekt;
    }
}
function setup() {

    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let selKjonn = document.getElementById("kjonn");
    let inpVekt = document.getElementById("vekt");
    let divMain = document.getElementById("main");
    let divOppsumering = document.getElementById("oppsumering");
    
    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", registrer);

    function registrer() {
        let navn = inpNavn.value;
        let alder = inpAlder.valueAsNumber;
        let kjonn = selKjonn.value;
        let vekt = inpVekt.value;
        let d = new Deltaker(navn, alder, kjonn, vekt)
        deltakere.push(d);
        skrivUtDeltaker();
        oppsumering();
        if (vekt>2045) {alert("du er for feit")
    }
    }
    function skrivUtDeltaker() {
        divMain.innerHTML = "";
        for (let i = 0; i < deltakere.length; i++) {
            let d = deltakere[i];
            divMain.innerHTML += d.navn + "<br></br>";
        }
    }
    function oppsumering() {
        divOppsumering.innerHTML = "";
        for (let i = 0; i < deltakere.length; i++) {
            let d = deltakere[i];
            divOppsumering.innerHTML += "vekt" + d.vekt + "TEKNISK PROBLEM, for dårlig tid til å løse det";
            
        }
    }
    
}