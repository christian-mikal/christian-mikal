// @ts-check


function setup() {

 

    let inpVoksen = document.getElementById("antallV");
    let inpBarn = document.getElementById("antallB");
    let btnBestill = document.getElementById("bestill");
    let divOversikt = document.getElementById("oversikt");
    btnBestill.addEventListener("click", lagreData);

    function lagreData() {
       
        visListe();
    }


    function visListe() {
        

        let prisVoksen = inpVoksen.value*120;
       let  prisBarn = inpBarn.value*90;

       
        

        let innhold = "";
        innhold += `Prisen blir ${prisVoksen + prisBarn}`;

        innhold += "";
        divOversikt.innerHTML = innhold;
    }

   
    var table = document.querySelector('#table')
    var selectedCells = table.getElementsByClassName('selected')
    
    table.addEventListener('click', function(e) {
      var td = e.target
      
      if (td.tagName !== 'TD') {
        return
      }
      
      if (selectedCells.length) {
        selectedCells[0].className = ''    
      }
    
      td.className = 'selected'
    })

}






