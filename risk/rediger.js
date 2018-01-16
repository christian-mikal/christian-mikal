//@ts-check


function setup() {
    var config = {
        apiKey: "AIzaSyDEB6KU4JvH0QC6gENK5zSnqCdsL6Mq5AI",
        authDomain: "risk-65a78.firebaseapp.com",
        databaseURL: "https://risk-65a78.firebaseio.com",
        projectId: "risk-65a78",
        storageBucket: "risk-65a78.appspot.com",
        messagingSenderId: "808476156491"
    };
    firebase.initializeApp(config);

    let database = firebase.database();

    let inpLand = document.getElementById("land");
    let inpRegion = document.getElementById("region");

    let btnLagreLand = document.getElementById("lagreland");
    btnLagreLand.addEventListener("click", lagreLand);

    let inpKort = document.getElementById("kort");
    let inpAntallNye = document.getElementById("antallnye");

    let btnLagreKort = document.getElementById("lagrekort");
    btnLagreKort.addEventListener("click", lagreKort);




    let inpSpiller = document.getElementById("spiller");
    let inpNavn = document.getElementById("navn");
    let inpFarge = document.getElementById("farge");
    let inpAlder = document.getElementById("alder");


    let btnLagreSpiller = document.getElementById("lagrespiller");
    btnLagreSpiller.addEventListener("click", lagreSpiller);


    function lagreSpiller(e) {
        let spiller = inpSpiller.value;
        let  farge= inpFarge.value;
        let  alder= inpAlder.value;
        let  navn= inpNavn.value;
        let ref = database.ref("spiller/" + spiller);
        ref.set({ alder, farge, navn });
    }




    function lagreLand(e) {
        let land = inpLand.value;
        let kortid = inpRegion.value;
        let ref = database.ref("land/" + land);
        ref.set({ kortid });
    }

    function lagreKort(e) {
        let kort = inpKort.value;
        let antallnye = inpAntallNye.value;
        let ref = database.ref("kort/" + kort);
        ref.set({ antallnye });
    }
}
