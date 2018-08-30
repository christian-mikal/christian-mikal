function setup() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCt1nI_X6IcsauUS1LtBW3iYVly09JJq9k",
    authDomain: "civcoutntries.firebaseapp.com",
    databaseURL: "https://civcoutntries.firebaseio.com",
    projectId: "civcoutntries",
    storageBucket: "civcoutntries.appspot.com",
    messagingSenderId: "977500869183"
  };

  firebase.initializeApp(config);
  let divListe = document.getElementById("liste");

  let ref = firebase.database().ref("kunde");

  function visKunder(snapshot) {
    let kundenr = snapshot.key;
    let info = snapshot.val();
    divListe.innerHTML += `
          <div>
            <h4>Kunde nr ${kundenr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Mobil : ${info.mobil}
             
            </ul>
          </div>
        `;
  }

  let ref2 = firebase.database().ref("dyr");

  function visDyr(snapshot) {
    let dnr = snapshot.key;
    let info = snapshot.val();
    divListe.innerHTML += `
          <div>
            <h4>Dyr nr ${dnr}</h4>
            <ul>
             <li>${info.art}
             <li> ${info.fdato}
             <li>Kjønn : ${info.kjønn}
             <li>Kunde Nr : ${info.kundenr}
             <li> Vekt:${info.vekt}
             
            </ul>
          </div>
        `;
  }

  let ref3 = firebase.database().ref("behandling");
  
    function visBehandling(snapshot) {
      let behandlingsnummer = snapshot.key;
      let info = snapshot.val();
      divListe.innerHTML += `
            <div>
              <h4>Kunde nr ${behandlingsnummer}</h4>
              <ul>
               <li>Dato: ${info.dato} 
               <li> Nr${info.dnr}
               <li>Pris ${info.pris}
               <li>Type ${info.type}
               
              </ul>
            </div>
          `;
    }

  ref.on("child_added", visKunder);
  ref2.on("child_added", visDyr);
  ref3.on("child-added", VisBehandling);




}


