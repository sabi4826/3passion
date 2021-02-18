	const header = document.querySelector("header h1");
	const medieurl = "https://rejsepanelet-2ad3.restdb.io/home/media";
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
		filter = this.dataset.kontinent;
		visLande();
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
				dest.appendChild(klon);
			}
		})
	}
