// @ts-check


class Bestilling {
    constructor(antall, elektro, kler, brus) {
        this.antall = antall;
        this.elektro = elektro;
        this.kler = kler;
        this.brus = brus;
    }
}


function setup() {

    let bestilling = [];

    let selVarer = document.getElementById("varer");
    let inpantall = document.getElementById("antall");
    let selElektro = document.getElementById("elektro");
    let selKler = document.getElementById("kler");
    let selBrus = document.getElementById("brus");
    let btnLagre = document.getElementById("lagre");
    let divMelding = document.getElementById("melding");
    btnLagre.addEventListener("click", lagreData);
    selVarer.addEventListener("change", visElektro);

    function visElektro() {
        document.getElementById(this.value + "div").classList.remove(this.value + "ting");
    }

    function lagreData() {
        let antall = inpantall.value;
        let elektro = selElektro.value;
        let kler = selKler.value;
        let brus = selBrus.value;
        let b = new Bestilling(antall, elektro, brus, kler);
        bestilling[0] = b;
        visListe();
    }




    /*
        function visListe() {
        
            let innhold = "";
    
            innhold += `Du er :${b.antall} år, og har bestillit dagskort for dager:${b.dager}  
               Prisen din er ${pris}kr
               Rabatten din er ${rabatt}kr`;
    
            innhold += "";
            divOversikt.innerHTML = innhold;
        }
        */
}






