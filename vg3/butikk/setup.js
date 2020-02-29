"use strict";

function setup() {
	var vareliste = new Vareliste();
	var handlekorg = new Handlekorg();
	var divHandlekorg = document.querySelector("#handlekorg");
	var divVareliste = document.querySelector("#vareliste");

	//legger til nye instaner inn i vareliste
	vareliste.add(new Vare("Bukse", 390));
	vareliste.add(new Vare("Slips", 90));
	vareliste.add(new Vare("Jakke", 490));
	vareliste.add(new Vare("Hatt", 1390));
	vareliste.add(new Vare("Sko", 4390));
	vareliste.add(new Vare("Støvler", 2390));


	vareliste.vis(divVareliste, vareKjop);

	function vareKjop(e) {
		handlekorg.add(this.vare);
		handlekorg.vis(divHandlekorg, fjernVare);
	}

	function fjernVare(e) {
		handlekorg.drop(this.vare);
		handlekorg.vis(divHandlekorg, fjernVare);
	}
}