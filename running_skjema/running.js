// @ts-check

function setup() {
    let outMelding = document.querySelector("#melding");
    let inpKm = document.getElementById("kilometer");
    let btnBeregn = document.getElementById("beregn");
    btnBeregn.addEventListener("click", regnUt);

    function regnUt(e) {
        // @ts-ignore
        let km = inpKm.value;
        outMelding.innerHTML = `Det blir ${km * 0.62} miles`
    }
}