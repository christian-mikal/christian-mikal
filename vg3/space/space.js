//@ts-check

function setup() {
    let divInfo = document.getElementById("info");
    let divDrivstoff = document.getElementById("drivstoff")
    let divSpacex = document.getElementById("spacex");
    let h = window.innerHeight - 200 -70    ;
    let drivstoff = 172;
    let py = -200;
    let fart = +2;
    let teller = 1;
    const MILLI = 100;


    let ani = setInterval(animasjon, 50);

    document.addEventListener("keydown", startMotor);

    function startMotor(e) {
        let k = e.key;
        switch(k) {
            case " ":
            if (drivstoff > 0) {
                fart = fart -10;
                drivstoff -= 4;
                divDrivstoff.style.height = drivstoff + "px";
            }
            
            break;
        }

    }

    function animasjon() {
        py = py + fart;
        fart = fart + 1;
        divSpacex.style.top = py + "px";
        if (py > h) {
            clearInterval(ani);
            console.log(fart);
            if (fart <= 8) {
                divInfo.innerHTML = "Du har landa";
                let msg = "du har landa";
                let poeng = drivstoff;
                divInfo.innerHTML = `
                ${msg}. Du har ${poeng} poeng. Du brukte ${teller*MILLI/1000} s`
            }
            else {
                divInfo.innerHTML = "Du har krasja";
            }
        }
    }
}