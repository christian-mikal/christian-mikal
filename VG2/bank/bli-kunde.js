//@ts-check

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

    let database = firebase.database();

    let inpKnr = document.getElementById("kundenr");
    let inpFornavn = document.getElementById("fornavn");
    let inpEtternavn = document.getElementById("etternavn");
    let inpAlder = document.getElementById("alder");


    let btnLagreKunde = document.getElementById("lagrekunde");
    btnLagreKunde.addEventListener("click", lagreKunde);


    function lagreKunde(e) {
        let kundenr = inpKnr.value;
        let  etternavn= inpEtternavn.value;
        let  alder= inpAlder.value;
        let saldo = Math.floor(Math.random() * ((1000000-2)+1) + 2);
        let  fornavn= inpFornavn.value;
        let ref = database.ref("kunde/" + kundenr);
        ref.set({ alder, etternavn, fornavn });
        let ref2 = database.ref("konto/");
        ref2.push({saldo, kundenr});
    }
}