// @ts-check

function setup() {
    let divTallene = document.getElementById("tallene");
    let divOperatorer = document.getElementById("operatorer");
    let inpDisplay = document.querySelector("#display > input");

    let nyttTall = true;
    let verdi = 0;
    let operator = "";

    divTallene.addEventListener("click", lesTall);
    divOperatorer.addEventListener("click", operer);

    function lesTall(e) {
        let t = e.target;
        if (t.className === "tall") {
            if (nyttTall) {
                inpDisplay.value = "";
                nyttTall = false;
                blink();
            }
            inpDisplay.value += t.innerHTML;
        }
    }

    function beregn() {
        nyttTall = true;
        blink();
        switch(operator) {
            case "+":
            verdi += Number(inpDisplay.value);
            inpDisplay.value = String(verdi);
            break;
            case "*":
            verdi *= Number(inpDisplay.value);
            inpDisplay.value = String(verdi);
            break;
            case "/":
            verdi /= Number(inpDisplay.value);
            inpDisplay.value = String(verdi);
            break;
            case "-":
            verdi -= Number(inpDisplay.value);
            inpDisplay.value = String(verdi);
            break;
            case "sin":
            verdi = Math.sin(inpDisplay.value);
            inpDisplay.value = String(verdi);
            break;
            case "cos":
            verdi = Math.cos(inpDisplay.value);
            inpDisplay.value = String(verdi);
            break;
            case "tan":
            verdi = Math.tan(inpDisplay.value);
            inpDisplay.value = String(verdi);
            break;
        }
        verdi = Number(inpDisplay.value);
        operator = "";
    }

    function operer(e) {
        let t = e.target;
        if (t.className === "op") {
            beregn();
            let id = t.id;
            switch(id) {
                case "opC":
                  break;
                case "opAC":
                  inpDisplay.value = "0";
                  nyttTall = true;
                  verdi = 0;
                  operator = "";
                  break;
                case "opPluss":
                operator = "+";
                  break;
                case "opErlik":
                  break;
                default:
                  break;

                  case "opMinus":
                  operator = "-"
                  break;
                  case "opGange":
                  operator = "*";
                  break;
                  case "opSin":
                  operator = "sin";
                  break;
                  case "opCos":
                  operator = "cos";
                  break;
                  case "opTan":
                  operator = "tan";
                  break;
                  case "opDele":
                  operator = "/";
                  break;
            }
        }
    }
    function blink() {
        inpDisplay.classList.add("active")
        setTimeout( () => inpDisplay.classList.remove("active"), 40);
    }
}