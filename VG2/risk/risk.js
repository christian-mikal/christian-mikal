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

    let land = database.ref("land");
    land.on("child_added", visLand)

    let kort = database.ref("kort");
    kort.on("child_added", visKort)

    let spiller = database.ref("spiller");
    spiller.on("child_added", visSpiller)
}

function visLand(snapshot) {
    let land = snapshot.key;
    let divTarget = document.getElementById("land");
    divTarget.innerHTML += `<div class="box1">${land}</div>`
}

function visKort(snapshot) {
    let kort = snapshot.key;
    let divTarget = document.getElementById("kort");
    divTarget.innerHTML += `<div class="box2">${kort}</div>`
}

function visSpiller(snapshot) {
    let spiller = snapshot.val();
    let divTarget = document.getElementById("spiller");
    divTarget.innerHTML += 
    `<div class="box3">
    <br>Navn ${spiller.navn}
    <br>Farge ${spiller.farge}
    <br>Alder ${spiller.alder}
    </div>`

}