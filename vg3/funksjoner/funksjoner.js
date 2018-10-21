//@ts-check

function setup() {
    document.getElementById("nr1").innerHTML = "3+4 = " + sum(3, 4);
    document.getElementById("nr2").innerHTML = "snitt: 3+3+3= " + snitt(3, 3, 3);
    document.getElementById("nr3").innerHTML = "2*6=" + produkt(2, 6);
    document.getElementById("nr4").innerHTML = "30 grader celcius i faren er = " + celcius2faren(30)
    document.getElementById("nr5").innerHTML = "100 grader f i c er = " + f2c(100)
    document.getElementById("nr6").innerHTML = "finn gjennomsnitt av array = " + snitt();
    document.getElementById("nr7").innerHTML = "finner medianen = "
    document.getElementById("nr8").innerHTML = "finner produktet av en array [2,3,4] = 2*3*4"


    function snitt(v) {
        let sum = 0;
        for (let i=0; i<v; i++;) {

        }
        return 
    }








    function sum(a, b) {
        return a + b;
    }

    function snitt(a, b, c) {
        return (a + b + c) / 3;
    }

    function produkt(a, b) {
        return (a * b);
    }

    function celcius2faren(c) {
        return (c * 9 / 5 + 32);
    }

    function f2c(f) {
        return ((f - 32) * (5 / 9));
    }
    function primtall(n) {
        if (n === 1) return false;
        if (n === 2) return true;
        if (n === 3) return true;
        if (n === 4) return false;
        if (n === 5) return true;
        if (n === 6) return false;
        if (n === 7) return true;
        if (n === 8) return false;
        if (n === 9) return false;
        if (n === 10) return true;
        if (n === 11) return true;
        if (n === 12) return false;
        if (n === 13) return true;
        if (n === 14) return false;
        if (n === 15) return false;
        if (n === 16) return false;
        if (n === 17) return true;
        if (n === 18) return false;
        if (n === 19) return true;
        if (n === 20) return false;
    }
}