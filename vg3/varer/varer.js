// @ts-check


class Bestillinger {
    constructor(antall, radio, tv, pc, cola, hatt, slips, sko) {

        this.antall = antall;
        this.radio = radio;
        this.tv = tv;
        this.pc = pc;
        this.cola = cola;
        this.hatt = hatt;
        this.slips = slips;
        this.sko = sko;
    }
}

/**
 * 
 * @param {string} id 
 */
function $(id) {
    return document.getElementById(id);
}


function setup() {

    let bestilling = [];

    let selVarer = $("varer");
    let inpAntall = $("antall");
    let btnBestill = $("bestill");
    let divMelding = $("melding");


    btnBestill.addEventListener("click", visBestilling);
    selVarer.addEventListener("change", visVarer);


    function visVarer() {
        document.getElementById(this.value + "div").classList.remove(this.value + "vare");
        return;
    }

    function visBestilling() {
        let inpVare = document.querySelector("input:checked");
        let vare = inpVare.value;
        let antall = inpAntall.value;
        let b = new Bestillinger(antall, radio, tv, pc, cola, hatt, slips, sko);
        bestilling.push(b);
        bestilling[0] = b;

        if (antall < 1 || antall > 100) {
            alert("Venligst ikke bestill mer enn 100 varer");
            location.reload();
        }



        let innhold = "";

        innhold += `Då ser eg at du har bestillt ${antall} ${vare}`;

        innhold += "";
        divMelding.innerHTML = innhold;
    }


}






