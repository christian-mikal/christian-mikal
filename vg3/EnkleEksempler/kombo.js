//@ts-check

// Norge: Oslo,Bergen,Tromsø
// Danmark: Kjøbenhavn, odense
// Finland: Helsinki, rovanjemi

//oslo:3000
//bergen:5000
//tromsø:10000
//kjøbenhavn:500
//odense:2000
//helsinki:8000
//rovanjemi:16000

let byListe = [
    "oslo,bergen,tromsø",
    "kjøbenhavn,odense",
    "helsinki,rovanjemi"
]
let prisListe = [
    "3000,5000,10000",
    "500,2000",
    "8000,16000"
]


let endringer;

function setup() {
    let selLand = document.getElementById("land");
    let selBy = document.getElementById("by");
    let divResultat = document.getElementById("resultat");

    selLand.addEventListener("change", valgtLand);
    selBy.addEventListener("change", valgtBy);

    let landNr;

    function valgtLand() {
        landNr = selLand.value;
        if (landNr >= 0 && landNr < byListe.length) {
            let byTekst = byListe[landNr];
            let byene = byTekst.split(",");
            let s = "";
            for (let by of byene) {
                s += "<option>" + by + "</option>"
            }
            selBy.innerHTML = s;
        }
    }
    let pris;
    let prisNr;
    function valgtBy() {
        let byNavn = "Norge,Danmark,Finland".split(",");
        let land = byNavn[landNr];
        let by = selBy.value;


        let byTekst = byListe[landNr];
        let byene = byTekst.split(",");

        if (by == "bergen") {
            pris = 5000;
        }

        if (by == "tromsø") {
            pris = 10000;
        }


        divResultat.innerHTML = `Du reiser til ${land} 
        og besøker byen ${by}. <br>
        Prisen på din reise blir ${pris}`;
    }

    endringer = valgtBy;

}