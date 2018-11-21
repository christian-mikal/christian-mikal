//@ts-check

class Bestilling {
    constructor(voksne, barn, forestilling) {
        this.voksne = voksne;
        this.barn = barn;
        this.forestilling = forestilling;
    }
}

function setup() {

    let bestillingsListe = [];


    let inpVoksne = document.getElementById("voksne");
    let inpBarn = document.getElementById("barn");
    let selForestilling = document.getElementById("forestilling");
    let btnLagre = document.getElementById("lagre");
    let divOversikt = document.getElementById("oversikt");

    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let voksne = inpVoksne.value;
        let barn = inpBarn.value;
        let forestilling = selForestilling.value;
        let bestilling = new Bestilling(voksne, barn, forestilling);

        if (+voksne + +barn > 0 && barn >= 0 && voksne > 0 && forestilling !== "") {
            document.getElementById("reg").classList.add("godkjent");
        }
        else {
            alert("Du må fylle ut med gyldige verdier");
            document.getElementById("reg").classList.remove("godkjent");
            return;
        }


        

        bestillingsListe[0] = bestilling;
        visListe();
    }
}

function visListe() {
    let innhold = "<ol>";
    for (let b of bestillingsListe) {
        innhold += `<li>Voksne: ${b.voksne} Barn: ${b.barn} Show: ${b.forestilling}</li>`
    }
    innhold += "</ol>";
    divOversikt.innerHTML = innhold;
}
