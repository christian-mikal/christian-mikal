class Person {
    static uuid() {return Math.random(); }

    #pnr = Person.uuid();

    constructor(pnt,fornavn,etternavn,alder=18) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.alder = alder; 
    }

    get pnr() {return this.#pnr;}
    set pnt(n) {this.#pnr = n}
}

let a = Person.uuid();

let p = new Person();
let q = new Person();
let b  p.pnr; 