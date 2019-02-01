//@ts-check 
class Kake {
    constructor(navn, sukker, egg) {
        this.navn = navn;
        this.sukker = sukker;
        this.egg = egg;
    }
}



const kakeListe = [
    new Kake("Blåbærkake", 400, 6),
    new Kake("Sitronkake", 40, 2),
    new Kake("Pannekake", 100, 4),
    new Kake("Bløtekake", 800, 10),
];


function setup() {

    let divMain = document.getElementById("main");
    let sel1 = document.getElementById("kake1");
    let sel2 = document.getElementById("kake2");
    let sel3 = document.getElementById("kake3");
    let sel4 = document.getElementById("kake4");
    let divGrafikk = document.getElementById("grafikk");
    let inpNavn = document.getElementById("navn");
    let inpSukker = document.getElementById("sukker");
    let inpEgg = document.getElementById("egg");
    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", lagreData);
    let btnTegn = document.getElementById("tegn");
    btnTegn.addEventListener("click", visGrafisk);
    visListe();

    function lagreData() {
        let navn = inpNavn.value;
        let sukker = inpSukker.value;
        let egg = inpEgg.value;

        let kake = new Kake(navn, sukker, egg);
        kakeListe.push(kake);
        visListe();
    }

    function visGrafisk() {
        let l1 = sel1.value;
        let l2 = sel2.value;
        let l3 = sel3.value;
        let l4 = sel4.value;
        if (l1 === l2 && l3 === l4 && l2 === l3) {
            alert("Velg minst to Kaker");
            return;
        }
        let liste = new Set([l1, l2, l3, l4]);
        divGrafikk.innerHTML = "";

        let max = 0;
        liste.forEach(e => {
            let kake = finnKake(e);
            if (kake.sukker > max)
                max = kake.sukker;
        })

        let sorterListe = Array.from(liste).map(e => finnKake(e)).sort((a, b) => b.sukker - a.sukker);
        console.log(sorterListe);
        sorterListe.forEach(e => {
            lagRunning(e, max);
        })
    }


    /**
    * Lager en runding som tilsvarer bef. i et valgt kake
    * @param {Kake} kake   Navn på en kake som skal finnes i kakeListe
    * @param {number} max  maksimum sukker for valgte kake
    */
    function lagRunning(kake, max) {
        let radius = Math.sqrt(200 * 200 * (+kake.sukker / max));
        let sirkel = document.createElement("div");
        sirkel.className = "sirkel";
        divGrafikk.appendChild(sirkel);
        sirkel.style.width = sirkel.style.height = radius + "px";
    }

    /**
     * Gitt navnet på en kake - finner data om kaken
     * @param {string} navn navn på kaken du søker
     * @returns {Kake} gir tilbake en instans av klassen kake
     */
    function finnKake(navn) {
        for (let i = 0; i < kakeListe.length; i++) {
            let kake = kakeListe[i];
            if (navn === kake.navn) {
                return kake;
            }
        }
    }
    function visListe() {
        // let s = landListe.map(l => `<option>${l.navn}</option>`).join("");

        let s = "";
        for (let l of kakeListe) {
            s += `<option>${l.navn}</option>`;
        }
        sel1.innerHTML = sel2.innerHTML = sel3.innerHTML = sel4.innerHTML = s;
    }
}
