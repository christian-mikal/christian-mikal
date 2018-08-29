// @ts-check

function setup() {
    let outMelding = document.querySelector("#melding");
    let inpSvar1 = document.getElementById("svar1");
    let btnBeregn = document.getElementById("beregn");
    btnBeregn.addEventListener("click", regnUt);
    let random1 = document.getElementById("random1").innerHTML = Math.floor(Math.random() * 10);
    let random2 = document.getElementById("random2").innerHTML = Math.floor(Math.random() * 10);


function regnUt(e) {
    let svar1 = inpSvar1.value;
    if (svar1 == random1 + random2) { 
        outMelding.innerHTML = `Det er rett`; 
    }
    else {outMelding.innerHTML = `Det er feil`;
}   
}
}

