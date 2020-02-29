//@ts-check

const W = 16;
const H = 16;


/**
 * Lager et brett med gitt bredde x høyde
 * @param {number} width Bredde på brett
 * @param {number} height Høyde
 * @returns {Array} Array som representerer brettet
 */
function lagBrett(width,height) {
    const TOTAL = width * height;
    let b = Array(TOTAL).fill(0);
    let antall = 35;
    do {
        let x = Math.trunc(Math.random() * TOTAL);
        if (b[x] === 0) {
            b[x] = 8;
            antall --;
        }
    } while (antall);
    return b;

}



// Viser bruk av funksjoner med parameter
// Bruker $ som i jquery og andre bibloteker
/**
 * Gitt en id - returner ref til html-element
 * @param {string} id Id på html-element
 * @returns {HTMLElement}
 */
function $(id) {
    return document.getElementById(id);
}
 /**
  * Viser brettet på skjermen;
  * @param {HTMLElement} div Div hvor brikker vises
  * @param {Array} arr Plassering av miner
  */
function visBrett(div,arr) {
    div.innerHTML = "";
    for(let i=0; i<arr.length; i++) {
        let b = arr[i];
        let rute = document.createElement("div");
        rute.className = "rute";
        rute.dataset.idx = String(i);
        rute.innerHTML = b ? String(b) :"";
        div.appendChild(rute);
    }
}

function setup() {
    const brikker = lagBrett(W,H);
    let divTid = $("tid");
    let divAntall = $("antall");
    let divBrett = $("brett");
    let divSmily = $("smily");
    visBrett(divBrett, brikker);
    divBrett.addEventListener("click",sjekkBombe);

    function sjekkBombe(event) {
        let t = event.target;
        if (t.classList.contains("rute")) {
            t.innerHTML = "O";
        }
    }
}
