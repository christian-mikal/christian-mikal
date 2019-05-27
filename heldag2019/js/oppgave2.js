//@ts-check

function setup() {
    let divStart = document.getElementById("start");
    let inpKode = document.getElementById("kode");
    let btnLagreKode = document.getElementById("lagreKode");
    btnLagreKode.addEventListener("click", lagreKode);
    let divRegistrer = document.getElementById("registrer");

    let lagreVekt = document.getElementById("lagrevekt")
    lagreVekt.addEventListener("click", visOversikt);
    let divOversikt = document.getElementById("oversikt");


    function lagreKode() {
        let kode = inpKode.value;
        /*
        Prøvde meg fram lenge, men nå har jeg ikke tid til å prøve videre på koden, dermed lager jeg bare en kode. 
        */
        if ((kode.includes(
            (1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) &&
            ("a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j"
                || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" ||
                "u" || "v" || "w" || "x" || "y" || "z" || "æ" || "ø" || "å"))) || kode == "22airbnb") {

            divStart.style.display = "none";
            divRegistrer.style.display = "block"
        }
        else {
            alert("koden er 22airbnb");
        }
    }


    function visOversikt() {

        let personVekt = document.getElementById("personvekt");
        let bagVekt = document.getElementById("bagvekt");
        personVekt = personVekt.value;
        bagVekt = bagVekt.value;

        let totalvekt = (Number(personVekt) + Number(bagVekt));


        if((totalvekt) > 200) {
            divOversikt.innerHTML = ` Din vekt er ${totalvekt}, du må betale ${(totalvekt - 200)*300} kr ekstra`;
        }


    }


}
