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
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);

}