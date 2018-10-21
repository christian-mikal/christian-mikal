//@ts-check

function setup(){
    let inpSko = document.getElementById("sko");
    let inpSokker = document.getElementById("sokker");
    let inpPistoler = document.getElementById("pistoler");
    let outMelding = document.querySelector("#melding");
    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", visOrdre)

    function visOrdre(){
        let sko = inpSko.valueAsNumber;
        let sokker = inpSokker.valueAsNumber;
        let pistol = inpPistoler.valueAsNumber;
        outMelding.innerHTML = `Da har du kjøpt ${sko} par sko, ${sokker} par med sokker, og sist men ikke minst ${pistol} pistoler! Det er kult!`
    }
}