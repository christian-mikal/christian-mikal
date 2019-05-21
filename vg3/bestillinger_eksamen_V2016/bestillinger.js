//@ts-check

let visPris;

/**
 * Lager en Map over hotell og priser
 * kan slå opp på hotellnavn og sesong og finne prisen. 
 */
let hotellPris = new Map();
hotellPris.set("aurora", { s: 590, v: 690 });
hotellPris.set("downtown", { s: 660, v: 750 });
hotellPris.set("cityhall", { s: 450, v: 530 });


function setup() {
    let selPeriode = document.getElementById("periode");
    let selDobbelt = document.getElementById("dobbelt");
    let selEnkelt = document.getElementById("enkelt");
    let selHotell = document.getElementById("hotell");
    let chkKultur = document.getElementById("kulturpass");
    let spanPris = document.getElementById("pris");

    let by = document.getElementById("by");
    let registrer = document.getElementById("registrer");
    registrer.style.display = "none";
    by.addEventListener("change", visRegistrer);
    let velgBy = document.getElementById("velgBy");


    function visRegistrer() {
        if (by.value == "newyork") {
            registrer.style.display = "block";
        }
        else {
            registrer.style.display = "none";
        }
    }

    visPris = function () {
        let periode = selPeriode.value;
        let enkelt = selEnkelt.value;
        let dobbelt = selDobbelt.value;
        let hotell = selHotell.value;
        let kultur = chkKultur.checked;
        let pris = kultur ? 700 : 0;
        let rompris = hotellPris.get(hotell);
        let sesongpris = rompris(periode);



        spanPris.innerHTML = pris.toFixed(2);
    }
}