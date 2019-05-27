//@ts-check 

/*
Oversikt over flyplasser 

Haugsund HAU
Bergen BGO
Stavanger SVG
Oslo OSL
Trondheim TRD
Vardø VAW
Tromsø TOS
Moss RYG
Florø FRO
Bodø BOO

xxx   HAU   BGO 	SVG  	OSL  	TRD 	VAW  	TOS  	RYG 	FRO 	BOO
HAU			700		600		1200	
BGO   700			900		1000	1200							600

SVG   650	890				900		

OSL	  1190	1300	990				700						400
TRD	  		1300			800						1200			800	
VAW	  												1600					1400
TOS   								1300	1600							900
RYG   						300				
FRO 		800						700
BOO  										1600	1000


*/
let byliste = [
    "BGO,SVG,OSL",
    "HAU,SVG,OSL,TRD,FRO",
    "HAU,BGO,OSL",
    "HAU,BGO,SVG,TRD,RYG",
    "BGO,OS,TOS,FRO",
    "TOS,BOO",
    "TRD,VAW,BOO",
    "OSL,",
    "BGO,TRD",
    "VAW,TOS"
]

let endringer;

function setup() {
    let selFlyplass1 = document.getElementById("flyplass1");
    let selFlyplass2 = document.getElementById("flyplass2");
    let selPassasjer = document.getElementById("passasjer")
    let divResultat = document.getElementById("resultat");

    selFlyplass1.addEventListener("change", valgtflyplass1);

    selFlyplass2.addEventListener("change", valgtFlyplass2);

    let flyplass1Nr;

    function valgtflyplass1() {
        flyplass1Nr = selFlyplass1.value;
        if (flyplass1Nr >= 0 && flyplass1Nr < byliste.length) {
            let byTekst = byliste[flyplass1Nr];
            let byene = byTekst.split(",");
            let s = "";
            for (let by of byene) {
                s += "<option>" + by + "</option>";
            }
            selFlyplass2.innerHTML = s;
        }

    }

    let pris;

    function valgtFlyplass2() {
        let byNavn = "HAU,BGO,SVG,OSL,TRD,VAW,TOS,RYG,FRO,BOO".split(",");
        let fly2 = selFlyplass2.value;
        let fly1 = byNavn[flyplass1Nr];
        let passasjerer = selPassasjer.value;

        /* Viser prisen for fly fra haugesund og Bergen, prossessen er den samme for de andre, men det ville tatt veldig lang tid */
        if (fly1 == "HAU" && fly2 == "BGO") {
            pris = 700* passasjerer;
        }
        if (fly1 == "HAU" && fly2 == "SVG") {
            pris = 600* passasjerer;
        }
        if (fly1 == "HAU" && fly2 == "OSL") {
            pris = 1200*passasjerer;
        }


        if (fly1 == "BGO" && fly2 == "HAU") {
            pris = 700* passasjerer;
        }
        if (fly1 == "BGO" && fly2 == "SVG") {
            pris = 900* passasjerer;
        }
        if (fly1 == "BGO" && fly2 == "OSL") {
            pris = 1000*passasjerer;
        }
        if (fly1 == "BGO" && fly2 == "TRD") {
            pris = 1200*passasjerer;
        }
        if (fly1 == "BGO" && fly2 == "FRO") {
            pris = 600*passasjerer;
        }
        

        divResultat.innerHTML = `Du reiser fra ${fly1} 
        og besøker byen ${fly2}. Du/dere er ${passasjerer}.     
        Prisen på din reise blir ${pris}`;
    }

    endringer = valgtFlyplass2;
}