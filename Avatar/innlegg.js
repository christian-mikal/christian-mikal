

    function setup() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDFaIeSK9FoYbCZ99ROccwWdu_FJ3e3cbg",
            authDomain: "webchat-63519.firebaseapp.com",
            databaseURL: "https://webchat-63519.firebaseio.com",
            projectId: "webchat-63519",
            storageBucket: "webchat-63519.appspot.com",
            messagingSenderId: "548683155160"
        };
        firebase.initializeApp(config);
        let divListe = document.getElementById("melding");
        
            let ref = firebase.database().ref("Innlegg");
        
            function visInnlegg(snapshot) {
                let innleggnr = snapshot.key;
                let info = snapshot.val();
                divListe.innerHTML += `
                  <div>
                    <h4>Innlegg: ${innleggnr}</h4>
                    <ul>
                     <li>${info.forumnr} 
                     <li> Skrevet av: ${info.medlemnr}
                     <li> <b>melding</b>:${info.melding}
                    </ul>
                  </div>
                `;
            }
            ref.on("child_added", visInnlegg);
        
        }