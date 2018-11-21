//@ts-check

function setup(){
    let divSiffer = document.getElementById("siffer");

    divSiffer.addEventListener("click", beregn);

    function beregn() {
        let t = e.target;
        if (t.classList.contains("bit")) {
            t.classList.toggle("on");
        }

        let bits = Array.from(divSiffer.querySelectorAll("div.on"));
        let sum = 0;
        for (let b of bits) {
            sum += Number(b.dataset.tall);
        }
        divVerdi.innerHTML = string(sum);
    }
}