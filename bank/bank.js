
function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBINsuc8kysYW8WC2L-YipLFGYTaG8c8KE",
        authDomain: "bank-303b4.firebaseapp.com",
        databaseURL: "https://bank-303b4.firebaseio.com",
        projectId: "bank-303b4",
        storageBucket: "bank-303b4.appspot.com",
        messagingSenderId: "709664111562"
    };
    firebase.initializeApp(config);
    let spanKunde = document.getElementById("kundevelger");
    let divKonto = document.getElementById("konto");


    let ref = firebase.database().ref("kunde");

    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
            let dropBox = makeDrop(kundene);
            spanKunde.innerHTML = dropBox;

            let drpKunde = document.getElementById("kundenr");
            drpKunde.addEventListener("change", visKonto);
        }
    });

    function visKonto(e) {
        let valgt = "" + document.getElementById("kundenr").value;
        let ref = firebase.database().ref("konto").orderByChild("kundenr").equalTo(valgt);
        ref.once("value").then(function (snapshot) {
            let kontoene = snapshot.val();
            if (kontoene) {
                let kontonr = Object.keys(kontoene);
                let kontoliste = `<ul>` +
                    kontonr.map(e => `<li>Saldo:${kontoene[e].saldo}Kr </li>`).join("")
                    + `</ul>`;
                divKonto.innerHTML = kontoliste;


            }
        });
    }


    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option value="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }
}















