// @ts-check

function setup() {
    let outMelding = document.querySelector("#melding");


    let btnEn = document.getElementById("en");
    btnEn.addEventListener("click", regnUt);
    let btnTo = document.getElementById("to");
    btnTo.addEventListener("click", regnUt);
    let btnTre = document.getElementById("tre");
    btnTre.addEventListener("click", regnUt);
    let btnFire = document.getElementById("fire");
    btnFire.addEventListener("click", regnUt);
    let btnFem = document.getElementById("fem");
    btnFem.addEventListener("click", regnUt);
    let btnSeks = document.getElementById("seks");
    btnSeks.addEventListener("click", regnUt);
    let btnSyv = document.getElementById("syv");
    btnSyv.addEventListener("click", regnUt);
    let btnÅtte = document.getElementById("åtte");
    btnÅtte.addEventListener("click", regnUt);
    let btnNi = document.getElementById("ni");
    btnNi.addEventListener("click", regnUt);
    let btnNull = document.getElementById("null");
    btnNull.addEventListener("click", regnUt);

    let btnMinus = document.getElementById("minus");
    btnMinus.addEventListener("click", regnUt);
    let btnClear = document.getElementById("clear");
    btnClear.addEventListener("click", regnUt);
    let btnDele = document.getElementById("dele");
    btnDele.addEventListener("click", regnUt);
    let btnPlus = document.getElementById("plus");
    btnPlus.addEventListener("click", regnUt);
    let btnBeregn = document.getElementById("beregn");
    btnBeregn.addEventListener("click", regnUt);




    function regnUt(e) {
        let btnEn = btnEn.value;
        alert("hei");

    }
}


