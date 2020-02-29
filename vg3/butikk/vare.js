
/**
 * Denne klassen definerer en Vare
 * En vare har egenskapene navn og pris
 * Dersom det finnes et bilde med samme navn (+.png)
 * Da brukes dette bildet i visningen som lages av knapp
 */


class Vare {
  constructor(navn, pris) {
    this.navn = navn;
    this.pris = pris;
  }

  /**
   *  Lager en knapp for en vare, denne knappen vil aktivere
   *  eventListener.
   *  @param {function} eventListener
   */

   //en funksjon som får en funksjon som parameter
  knapp(eventListener) {
    let s = document.createElement('div');
    let f = document.createElement('button');
    let label = document.createElement('label');
    f.innerHTML = "kjøp";
    label.innerHTML = this.navn + ': ' + this.pris + "kr    ";
    let p = document.createElement('div');
    f.appendChild(p);
    s.appendChild(label);
    f.id = this.navn;
    f.vare = this;
    f.addEventListener('click', eventListener);
    s.classList.add("salg");
    s.appendChild(f);
    return s;
  }

  /**
   *  Lager en varelinje for en vare
   *  @param {int} antall - antallet av varen
   *  @param {function} eventListener - kjøres ved klikk på linja
   */
  linje(antall, eventListener) {
    let s = document.createElement('div');
    s.addEventListener("click", eventListener);
    s.vare = this;
    s.classList.add("kjop");
    s.innerHTML = '<div>' + antall + '</div><div>' + this.navn
    + '</div><div>'
    + this.pris + 'kr</div><div>' + (antall * this.pris) + '</div>';
    return s;
  }
}
