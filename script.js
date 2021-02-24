window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
}

//burgermenu
//myFunction er det, der er skrevet ind i HTML koden i vores nav, på vores container, der indeholder de 3 barer, der udgør burgermenuen
function myFunction(x) {
    //ved tryk på burgermenuen føres man til myFunction(x), hvor man kan bruge toggle til at åbne og lukke burger menuen
    x.classList.toggle("change"); //<-- change er CSS'en for barerne, her forsvinder bar 2, når der trykkes på burger menuen, så det bliver til et X

    //her vælges der så, hvordan indholdet i myLinks skal opsættes, når der er trykket på burger menuen
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") { //<-- opsættes i block, når burger menuen er trykket på
        x.style.display = "none"; //<-- vises ikke, når burger menuen er lukket
    } else {
        x.style.display = "block"; //<-- opsættes i block igen
    }
}
