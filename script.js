window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
}

//burgermenu
function myFunction(x) {
    x.classList.toggle("change");

    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
