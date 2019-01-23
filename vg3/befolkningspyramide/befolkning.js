//@ts-check

let landListe = [
    "Afghanistan",
    "AFRICA",
    "Albania",
    "Algeria",
    "Angola",
    "Antigua and Barbuda",
    "Arab Rep of Egypt",
    "Argentina",
    "Armenia",
    "Aruba",
    "ASIA",
    "Australia",
    "Australia/New Zealand",
    "Austria",
    "Azerbaijan",
    "The Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cote-d-Ivoire",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Caribbean",
    "Central African Republic",
    "Central America",
    "Central Asia",
    "Chad",
    "Channel Islands",
    "Chile",
    "China",
    "Hong Kong SAR-China",
    "Macao SAR China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Dem Peoples Rep of Korea",
    "Dem Rep of Congo",
    "Denmark",
    "Djibouti",
    "Dominican Republic",
    "Eastern Africa",
    "Eastern Asia",
    "Eastern Europe",
    "Ecuador",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "EUROPE",
    "Federated States of Micronesia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "FYR Macedonia",
    "Gabon",
    "The Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Islamic Republic of Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyz Republic",
    "Lao PDR",
    "LATIN AMERICA AND THE CARIBBEAN",
    "Latvia",
    "Least developed countries",
    "Lebanon",
    "Lesotho",
    "Less developed regions",
    "Less developed regions, excluding China",
    "Less developed regions, excluding least developed countries",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Melanesia",
    "Mexico",
    "Micronesia",
    "Middle Africa",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "More developed regions",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "The Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Africa",
    "NORTHERN AMERICA",
    "Northern Europe",
    "Norway",
    "OCEANIA",
    "Oman",
    "Other non-specified areas",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Polynesia",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "RB-de-Venezuela",
    "Rep of Korea",
    "Rep of Yemen",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St-Lucia",
    "St-Vincent and the Grenadines",
    "Samoa",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovak Republic",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South America",
    "South Sudan",
    "South-Central Asia",
    "South-Eastern Asia",
    "Southern Africa",
    "Southern Asia",
    "Southern Europe",
    "Spain",
    "Sri Lanka",
    "West Bank and Gaza",
    "Sub-Saharan Africa",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Rep",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "US Virgin Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vietnam",
    "Western Africa",
    "Western Asia",
    "Western Europe",
    "Western Sahara",
    "World",
    "Zambia",
    "Zimbabwe"
]

function setup() {
    let btnTegn = document.getElementById("tegn");
    let inpAar = document.getElementById("aar");
    let inpLand = document.getElementById("land");
    let divMain = document.getElementById("main");
    let divFemales = document.getElementById("females");
    let divMales = document.getElementById("males");




       landListe.forEach( e => {
            let opt = document.createElement("option");
            opt.innerHTML = e;
            inpLand.appendChild(opt);
       })
  


    btnTegn.addEventListener("click", hentDataOgTegn);

    function hentDataOgTegn() {

        //@ts-ignore
        let land = inpLand.value || "Norway";
        //@ts-ignore
        let aar = inpAar.value || "1950";

        let url = `http://api.population.io:80/1.0/population/${aar}/${land}/`;
        fetch(url).then(r => r.json())
            .then(data => behandle(data))
            .catch(e => console.log("Dette virka ikke."))

    }




    function behandle(data) {

        divFemales.innerHTML = "";
        divMales.innerHTML = "";

        //finnes den største verdien ffs!
        let max = data.reduce((s,e) => Math.max(s,e.males),0)
        

        for (let i = 0; i < data.length; i++) {
            let aardata = data[i];
            let f = Number(aardata.females)/max;
            let m = Number(aardata.males)/max;
            let divm = document.createElement("div");
            let divf = document.createElement("div");
            divm.className = "soyle males";
            divf.className = "soyle females";
            divf.style.width = f + "px";
            divm.style.width = m + "px";
            divFemales.appendChild(divf);
            divMales.appendChild(divm);
        }
        
    }





}
