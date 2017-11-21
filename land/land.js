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
    let ref = firebase.database().ref("nations")

    function visLand(snapshot) {
        let land = snapshot.val();
        divListe.innerHTML += `
            <div>${land.capital}</div>
            `;
    }

    ref.on("child_added", visLand);

}