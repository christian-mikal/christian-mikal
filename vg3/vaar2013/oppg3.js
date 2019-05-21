//@ts-check

class Matvare {
    constructor(protein,kcal,fett) {
        this.protein = protein;
        this.kcal = kcal;
        this.fett = fett;
    }
}

let matvareListe = new Map();

matvareListe.set("ost", new Matvare(1,2,3));
matvareListe.set("smør", new Matvare(4,5,6));
matvareListe.set("melk", new Matvare(7,8,9));
matvareListe.set("brød", new Matvare(10,11,12));

// kan lett legge til nye linjer med matvarer
// kan lese matvarer fra fil, men vanskelig å vise
// da fetch() metoden ikke virker uten server

function setup() {
    let divMain = document.getElementById("main");
    let frmSkjema = lagSkjema(divMain);
    let divGraf = document.createElement("div");
    divGraf.className = "graf";
    divMain.appendChild(divGraf);
    frmSkjema.addEventListener("change",behandleData);
}

/**
 * Lager et enkelt skjema
 * @param {HTMLElement} div 
 * @returns HTMLElement
 */

function lagSkjema(div) {
    let frm = document.createElement("form");
    div.appendChild(frm);
    
    frm.innerHTML = `
    Diagrammet oppdateres ved hver endring
    <br> Antall ost <input type="number" id="ost">
    <br> Antall melk <input id="melk" type="number">
    <br> Antall brød <input id="brød" type="number">
    <br> Antall smør <input id="smør" type="number">
    `
    return frm;
}

/**
 * 
 * @param {string} id htmlelement
 * @returns {number} verdien fra unput 
 */
function getValue(id){
    //@ts-ignore
    return Number(document.getElementById(id).value) || 0;
}

function behandleData() {
    let ost = getValue("ost");
    let melk = getValue("melk");
    let brød = getValue("brød");
    let smør = getValue("smør");
    let ostData = matvareListe.get("ost");
    let melkData = matvareListe("melk");
    let brodData = matvareListe("brød");
    let smorData = matvareListe("smør");

    let protein = ostData.protein*ost + melkData.protein*melk;
    protein += brodData.protein * brod + smorData.protein*smorData;

    tegnSoyle(protein,"Protein");
}

/**
 * 
 * @param {number} verdi Bredde på Søyle
 * @param {string} tekst Tekst på søyle
 */
function tegnSoyle(verdi, tekst) {
    let divGraf = document.querySelector("graf");
    let soyle = document.createElement("div");
    soyle.className = "soyle";
    divGraf.appendChild(soyle);
    soyle.innerHTML = tekst;
    soyle.style.width = (verdi*5) + "px";
}