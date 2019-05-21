//@ts-check

class Hytte {
    constructor(navn, sengeplasser, standard, badstu, ukepris) {
        this.navn = navn;
        this.sengeplasser = sengeplasser;
        this.standard = standard;
        this.badstu = badstu;
        this.ukepris = +ukepris *1000;
        this.bilde = navn.toLowerCase() + ".jpg";
        // Antar at hyttenavn og navn på bilde stemmer overens som i tabellen
        this.utleid = [0,0,0];
    }
    bestill(sesong) {
        this.utleid[sesong] = 1;
    }
    
    vis() {
        return `<h4>${this.navn}
        <br> Sengeplasser: ${this.sengeplasser}
        <br>Standard: ${this.standard}
        <br>Badstu: ${this.badstu}
        <br>Ukepris: ${this.ukepris}
        <br><img src"../media/${this.bilde}">`;
    }
}

let hytteData = new Map();  // skal lagre data om alle hyttene

const hytteText = `Granstua,4,høy,ja,12
Grantoppen,6,middels,nei,15
Granbo,8,lav,nei,16
Granhaug,10,høy,ja,30`;

function lesHytteData() {
    // Simulerer at jeg har lest tekstfil med data om hyttene
let hytteLinjer = hytteText.split('\n');
for (let h of hytteLinjer) {
    let[navn,plasser,standard,badstu,ukepris] = h.split(",");
    let hytte = new Hytte(navn,plasser,standard,badstu,ukepris);
    hytteData.set(navn,hytte);
}
}

function setup() {
    
}
