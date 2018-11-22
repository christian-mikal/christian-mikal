// @ts-check


class Bestilling {
    constructor(alder, dager) {
        this.alder = alder;
        this.dager = dager;
    }
}


function setup() {

    let bestilling = [];

    let inpalder = document.getElementById("alder");
    let inpdager = document.getElementById("dager");
    let btnLagre = document.getElementById("lagre");
    let divOversikt = document.getElementById("oversikt");
    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let alder = inpalder.value;
        let dager = inpdager.value;
        let b = new Bestilling(alder, dager);
        bestilling[0] = b;
        visListe();
    }


    function visListe() {
        let b = bestilling[0];
        let pris = 0;
        let rabatt = 0;
        if (b.alder < 12) {
            pris = b.dager * 100;
        }
        else {
            pris = b.dager * 200;
        }

        if (b.alder <= 12 && pris > 500) {
            rabatt = pris - 500;
            pris = 500;

        }
        if (b.alder > 12 && pris > 1000) {
            rabatt = pris - 1000;
            pris = 1000;

        }

        if (b.dager > 7 || b.dager < 1) {
            alert("Kan jo bare ha 7 dager da...");
            return;
        }


        let innhold = "<ol>";
        innhold += `Du er :${b.alder} år, og har bestillit dagskort for dager:${b.dager}  
           Prisen din er ${pris}kr
           Rabatten din er ${rabatt}kr`;

        innhold += "</ol>";
        divOversikt.innerHTML = innhold;
    }
}






