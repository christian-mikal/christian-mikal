//@ts-check 
class Planet {
    constructor(navn, baneradius, periode, diameter, banefart, masse, farge) {
        this.navn = navn;
        this.baneradius = baneradius;
        this.periode = periode;
        this.diameter = diameter;
        this.banefart = banefart;
        this.masse = masse;
        this.farge = farge;
    }
}



const planetListe = [
    new Planet("Merkur", 57.92, 0.24, 4879, 47.8, 0.33, "grey"),
    new Planet("Venus", 108.2, 0.615, 12104, 35.0, 4.87, "yellow"),
    new Planet("Tellus", 149.6, 1, 12742, 29.8, 5.97, "blue"),
];


function setup() {

    let divMain = document.getElementById("main");
    let sel1 = document.getElementById("planet1");
    let sel2 = document.getElementById("planet2");
    let sel3 = document.getElementById("planet3");
    let sel4 = document.getElementById("planet4");
    let divGrafikk = document.getElementById("grafikk");
    let inpNavn = document.getElementById("navn");
    let inpBaneradius = document.getElementById("baneradius");
    let inpPeriode = document.getElementById("periode");
    let inpDiameter = document.getElementById("diameter");
    let inpBanefart = document.getElementById("banefart");
    let inpMasse = document.getElementById("masse");
    let inpFarge = document.getElementById("farge");
    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", lagreData);
    let btnTegn = document.getElementById("tegn");
    btnTegn.addEventListener("click", visGrafisk);
    visListe();

    function lagreData() {
        let navn = inpNavn.value;
        let baneradius = inpBaneradius.value;
        let periode = inpPeriode.value;
        let diameter = inpDiameter.value;
        let banefart = inpBanefart.value;
        let masse = inpMasse.value;
        let farge = inpFarge.value;

        let planet = new Planet(navn, baneradius, periode, diameter, banefart, masse, farge);
        planetListe.push(planet);
        visListe();
    }

    function visGrafisk() {
        let l1 = sel1.value;
        let l2 = sel2.value;
        let l3 = sel3.value;
        let l4 = sel4.value;
        if (l1 === l2 && l3 === l4 && l2 === l3) {
            alert("Velg minst to Planeter");
            return;
        }
        let liste = new Set([l1, l2, l3, l4]);
        divGrafikk.innerHTML = "";

        let max = 0;
        liste.forEach(e => {
            let planet = finnPlanet(e);
            if (planet.diameter > max)
                max = planet.diameter;
        })

        let sorterListe = Array.from(liste).map(e => finnPlanet(e)).sort((a, b) => b.diameter - a.diameter);
        
        sorterListe.forEach(e => {
            lagPlanet(e, max);
        })
       


    }


    /**
    * Lager en planet som tilsvarer diameter i et valgt planet
    * @param {Planet} planet   Navn på en planet som skal finnes i planetListe
    * @param {number} max  maksimum sukker for valgte planet
    */
    function lagPlanet(planet, max) {
        let radius = Math.sqrt(200 * 200 * (+planet.diameter / max));
        let sirkel = document.createElement("div");
        let farge = planet.farge;
        let periode = planet.periode;
        sirkel.className = "sirkel";
        divGrafikk.appendChild(sirkel);
        sirkel.style.width = sirkel.style.height = radius + "px";
        sirkel.style.backgroundColor = farge;
        sirkel.innerHTML = `${planet.navn}<br> Masse:${planet.masse}<br> Solavstand: ${planet.baneradius} <br> Diameter: ${planet.diameter} `;
        sirkel.style.animation = `myOrbit ${periode*5}s linear infinite`;
    }

    /**
     * Gitt navnet på en planet - finner data om planeten
     * @param {string} navn navn på planeten du søker
     * @returns {Planet} gir tilbake en instans av planet 
     */
    function finnPlanet(navn) {
        for (let i = 0; i < planetListe.length; i++) {
            let planet = planetListe[i];
            if (navn === planet.navn) {
                return planet;
            }
        }
    }
    function visListe() {
        // let s = landListe.map(l => `<option>${l.navn}</option>`).join("");

        let s = "";
        for (let l of planetListe) {
            s += `<option>${l.navn}</option>`;
        }
        sel1.innerHTML = sel2.innerHTML = sel3.innerHTML = sel4.innerHTML = s;
    }
}
