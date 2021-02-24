window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("button").addEventListener("click", clickButton);
}


function clickButton() {
    console.log("clickButton");
    this.classList.add("valgt");
}

const header = document.querySelector("header h1");
const medieurl = "https://rejsepanelet-2ad3.restdb.io/media/";
const myHeaders = {
    "x-apikey": "602e6aa25ad3610fb5bb6325"
}

document.addEventListener("DOMContentLoaded", start);
let lande;
let filter = "alle";

function start() {
    console.log("funktion start");
    const filterKnapper = document.querySelectorAll("nav button");
    filterKnapper.forEach(knap => knap.addEventListener("click", filtrerLande));
    loadJSON();
}

// funktion til filtrering
function filtrerLande() {
    //tilføjelse med class valgt
    filter = this.dataset.kontinent;
    document.querySelector(".valgt").classList.remove("valgt");
    this.classList.add("valgt");
    visLande();
    header.textContent = this.textContent;
}

async function loadJSON() {
    const JSONData = await fetch("https://rejsepanelet-2ad3.restdb.io/rest/destinationer", {
        headers: myHeaders
    });
    lande = await JSONData.json();
    console.log("Lande", lande);
    visLande();
}

// Vis lande i liste view
function visLande() {
    console.log("Funktion visLande");
    // container til lande og info fra json:
    const dest = document.querySelector("#liste");
    const skabelon = document.querySelector("template").content;
    // Fjern al eksisterende tekst:
    dest.textContent = "";
    // loop igennem lande/json:
    lande.forEach(land => {
        if (filter == land.kontinent || filter == "alle") {
            const klon = skabelon.cloneNode(true);
            klon.querySelector(".h2_land").textContent = land.land;
            klon.querySelector(".foto").src = medieurl + land.billede;
            klon.querySelector(".kort_beskrivelse").textContent = land.kortBeskrivelse;
            //kommer ind på single view ved klik på info knap
            klon.querySelector(".info").addEventListener("click", () => visDetaljer(land));
            dest.appendChild(klon);
        }
    })
}

function visDetaljer(hvem) {
    location.href = `singleview.html?id=${hvem._id}`;
}
