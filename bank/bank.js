
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
    let kunde = database.ref("kunde");
    kunde.on("child_added", visKunde)
    let konto = database.ref("konto");
    konto.on("child_added", visKonto)
    let transaksjon = database.ref("transaksjon");
    transaksjon.on("child_added", visTransaksjon)
}


function visKunde(snapshot) {
    let kunde = snapshot.key;
    let divTarget = document.getElementById("kunde");
    divTarget.innerHTML += `<div class="box1"> 
    <br> fornavn${bank.fornavn}
    <br>Etternavn ${bank.etternavn} 
    <br> ${bank.adresse}
    </div>`
}

function visKonto(snapshot) {
    let konto = snapshot.key;
    let divTarget = document.getElementById("konto");
    divTarget.innerHTML += `<div class="box2">${konto}</div>`
}

function visTransaksjon(snapshot) {
    let transaksjon = snapshot.val();
    let divTarget = document.getElementById("transaksjon");
    divTarget.innerHTML +=
        `<div class="box3">
    ${transaksjon}
    </div>`

}