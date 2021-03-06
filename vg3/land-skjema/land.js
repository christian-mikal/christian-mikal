//@ts-check
class Land {
    constructor(navn, befolkning, hovedstad, bnp, areal, hbef) {
        this.navn = navn;
        this.befolkning = befolkning;
        this.hovedstad = hovedstad;
        this.bnp = bnp;
        this.areal = areal;
        this.hbef = hbef;
    }
}

const landListe = [
    new Land("Norge", 5.3, "Oslo", 2, 300, 0.6),
    new Land("Sverige", 9.3, "Stockholm", 2, 300, 0.6),
    new Land("Danmark", 5.5, "København", 2, 300, 0.6),
    new Land("Finland", 5.2, "Helsinki", 2, 300, 0.6),
    new Land("Island", 0.3, "Reykjavik", 2, 300, 0.6),
];

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}

function setup() {

    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight / 2;
        init()
    })


    let inpNavn = document.getElementById("navn");
    let inpBefolkning = document.getElementById("befolkning");
    let inpHovedstad = document.getElementById("hovedstad");
    let inpBnp = document.getElementById("bnp");
    let inpAreal = document.getElementById("areal");
    let inpHbef = document.getElementById("hbef");
    
    let btnTegn = document.getElementById("tegn");
    let selL1 = document.getElementById("land1");
    let selL2 = document.getElementById("land2");
    let selL3 = document.getElementById("land3");
    let selL4 = document.getElementById("land4");
    let divGrafikk = document.getElementById("grafikk");
    let divOversikt = document.getElementById("oversikt");

    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", lagreData);
    visListe();

    function lagreData() {
        let navn = inpNavn.value;
        let befolkning = inpBefolkning.value;
        let hovedstad = inpHovedstad.value;
        let bnp = inpBnp.value;
        let areal = inpAreal.value;
        let hbef = inpHbef.value;

        let land = new Land(navn, befolkning, hovedstad, bnp, areal, hbef);
        landListe.push(land);
        console.log(landListe);
    }


    function visGrafisk() {
        let l1 = selL1.value;
        let l2 = selL2.value;
        let l3 = selL3.value;
        let l4 = selL4.value;
        if (l1 === l2 && l3 === l4 && l2 === l3) {
            alert("Velg minst to land");
            return;
        }
        let liste = new Set([l1, l2, l3, l4]);
        divGrafikk.innerHTML = "";

        let max = 0;
        liste.forEach(e => {
            let land = finnLand(e);
            if (land.befolkning > max) max = land.befolkning;
        })
        let sortertListe = Array.from(liste).map(e => finnLand(e)).sort((a, b) => b.befolkning - a.befolkning);
        console.log(sortertListe);
        sortertListe.forEach(e => {
            lagRunning(e, max);
        })

    }

    function finnLand(navn) {
        for (let i = 0; i < landListe.length; i++) {
            let land = landListe[i];
            if (navn === land.navn) {
                return land;
            }
        }
    }

    function visListe() {
        // let s = landListe.map(l => `<option>${l.navn}</option>`).join("");

        let s = "";
        for (let l of landListe) {
            s += `<option>${l.navn}</option>`;
        }
        selL1.innerHTML = selL2.innerHTML = selL3.innerHTML = selL4.innerHTML = s;
    }
}


/*



canvas.width = innerWidth;
canvas.height = innerHeight / 2;


let circle1;



function init() {
    circle1 = [];

    let radius = befolkning;
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);


    circle1.push(new Circle(x, y, radius, "black"));
}

this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

this.update = function () {
    this.draw();
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    circle1.update();



}
init();
animate();
