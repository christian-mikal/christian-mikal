//@ts-check

function setup() {

    document.getElementById("resten").style.display = "none";
    document.getElementById("spm").style.display = "none";

    let alder = document.getElementById("alder");
    let lagre = document.getElementById("lagreAlder");
    lagre.addEventListener("click", lagreAlder);
    
    function lagreAlder() {
        if (alder.value > 10){
            document.getElementById("sjekk").style.display = "none";
            document.getElementById("spm").style.display = "block";
            var source = "../media/fortnite.mp3"
            var audio = document.createElement("audio");
            //
            audio.autoplay = true;
            //
            audio.load()
            audio.addEventListener("load", function() { 
                audio.play(); 
            }, true);
            audio.src = source;
        }
    }
    
    

    let question1B = document.getElementById("question-1-answers-B");
    question1B.addEventListener("click", goAway);

    let question2A = document.getElementById("question-2-answers-A");
    question2A.addEventListener("click", vegetarianer);

    let question2B = document.getElementById("question-2-answers-B");
    question2B.addEventListener("click", visResten);

    function visResten() {

        document.getElementById("resten").style.display = "block";
    }

    function vegetarianer() {
        location.href = "https://steaks.com/";
    }

    function goAway() {
        alert("Dra deg til helvette vekk fra denne serrøise nettsiden som handler om frosker og ikke om kvinnemennesker!!! DU ER MOTBYDELIG!!!");
        location.href = "http://www.partridgegetslucky.com/";
        return;

    }

}