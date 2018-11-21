//@ts-check

class Person {
    constructor(navn,alder,adresse) {
        this.navn = navn;
        this.alder = alder;
        this.adresse = adresse;
    }
}

function setup(){

    let personListe = [];


    let inpNavn = document.getElementById("navn");
    let inpAdresse = document.getElementById("adresse");
    let inpAlder = document.getElementById("alder");
    let btnLagre = document.getElementById("lagre");

    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let navn = inpNavn.value;
        let adresse = inpAdresse.value;
        let alder = inpAlder.value;
        let person = new Person(navn,adresse,alder);
        personListe.push(person);

    }
}