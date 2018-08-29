// @ts-check

function setup() {
    let divHeader = document.getElementById("header");
    let outMelding = document.querySelector("#melding");
    let btnLagre = document.getElementById("lagre");
    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let inpKlasse = document.getElementById("klasse");
    let inpMobil = document.getElementById("mobil");
    let inpEpost = document.getElementById("epost");
    let inpAdresse = document.getElementById("adresse");
    btnLagre.addEventListener("click", lagreNavn);

    function lagreNavn(e) {

        let navn = inpNavn.value;
        let alder = inpAlder.value;
        let klasse = inpKlasse.value;
        let mobil = inpMobil.value;
        let epost = inpEpost.value;
        let adresse = inpAdresse.value;
        outMelding.innerHTML = `Du heter ${navn} og er ${alder} år. Du går i ${klasse} og ditt mobilnummer er: ${mobil}. Din epost er ${epost}, og din adresse er ${adresse}. `;

    }
}