//@ts-check

/**
 * Buder egentlig lese filen med spørsmål
 * med fetch() ...
 * let url = "sporsmaal.json";
fetch(url).then(r => r.json())
  .then(data => behandle(data))
  .catch(e => console.log("Dette virka ikke."))
 * Men dette fungerer bare dersom siden leveres av en webserver
 * Siden jeg tester på filsystemet så "faker" jeg dette med en
 * variable med resultatet av å ha lest filen. 
 */
let file =
`1. Hva betyr ordet Where?
- Hvor *
- Vi er
- Var
- Hvorfor
2. Hvilke(t) ord kan legges til her? How are…
- you *
- John doing?
- things *
- the house
- the wife
3. Spill av lydfilen «Oversetting.mp3» og velg riktig oversettelse: 
- Hei, mitt navn er Tom
- Jeg er Tom
- Kjenner du Tom? *
- Når kommer Tom?`;
    let linjer = file.split(`\n`);
console.log(linjer, linjer.length);

function setup() {
    let divQuiz = document.getElementById("quiz");
    for (let linje of linjer) {
        if ("123456789".includes(linje.charAt(0)) /*Første bokstav er et tall*/
        ) {
            let [nr,tekst] = linje.split(". "); //Kan begrense til ett klipp, men tid...
            
        }
        else {
                // det må være et alternativ
                // legg til alternativet
        }
    }
    //vis på skjermen
}
