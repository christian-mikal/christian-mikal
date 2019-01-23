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

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }


}

function setup() {

    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight / 2;

        init();
    })



    let landListe = [];

    let inpNavn = document.getElementById("navn");
    let inpBefolkning = document.getElementById("befolkning");
    let inpHovedstad = document.getElementById("hovedstad");
    let inpBnp = document.getElementById("bnp");
    let inpAreal = document.getElementById("areal");
    let inpHbef = document.getElementById("hbef");
    let btnLagre = document.getElementById("lagre");

    btnLagre.addEventListener("click", lagreLand)

    function lagreLand() {
        let navn = inpNavn.value;
        let befolkning = inpBefolkning.value;
        let hovedstad = inpHovedstad.value;
        let bnp = inpBnp.value;
        let areal = inpAreal.value;
        let hbef = inpHbef.value;




        let land = new Land(navn, befolkning, hovedstad, bnp, areal, hbef);
        landListe.push(land);
        console.log(landListe);

        const canvas = document.querySelector('canvas')
        const c = canvas.getContext('2d')

        canvas.width = innerWidth;
        canvas.height = innerHeight / 2;


        let circle1;
        let x;
        let y;
        let radius = befolkning;

        function init() {
            x = randomIntFromRange(radius, canvas.width - radius);
            y = randomIntFromRange(radius, canvas.height - radius);


            circle1 = new Circle(x, y, radius, "black");

        }

        Circle.prototype.draw = function () {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
            c.closePath()
        }

        Circle.prototype.update = function () {
            this.draw();
        }

        function animate() {
            requestAnimationFrame(animate)
            c.clearRect(0, 0, canvas.width, canvas.height)

            circle1.update();


        }

        init();
        animate();
    }



}
