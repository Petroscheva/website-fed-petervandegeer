const dialog = document.querySelector("dialog");

const nieuwbutton = document.getElementById("nieuwbutton");
const themasbutton = document.getElementById("themasbutton");
const nieuwsection = document.getElementById("sectie1");
const themassection = document.getElementById("sectie2")

const headertekst1 = document.querySelector(".headertekst1");
const headertekst2 = document.querySelector(".headertekst2");
const headertekst3 = document.querySelector(".headertekst3");

const knopVerder = document.querySelector(".btnverder");
const knopTerug = document.querySelector(".btnterug");
const sluitKnop = document.querySelector(".sluiten");
const informatietab = document.querySelector(".informatietab");

var openButton = document.getElementById("hamburgermenu");
const hamburgermenu = document.querySelector(".hamburgermenucontent");
var sluitButton = document.querySelector(".menusluitknop");

const navKnoppen = document.querySelectorAll(".hoofdnavigatieonderdeel");
const x = window.matchMedia("(min-width:57em)");

const openWinkelenButton = document.querySelector(".winkelenknop");
const winkelmenu = document.querySelector(".winkelenmenu");
var sluitWinkelenButton = document.querySelector(".winkelenmenusluitknop");

//knoppen voor de navigatie in de informatietab//
function KlikVerder() {
    // 1 naar 2 //
    if (!headertekst1.classList.contains("hidden")) {
        headertekst1.classList.add("hidden");
        headertekst2.classList.remove("hidden");
    }
    // 2 naar 3 //
    else if (!headertekst2.classList.contains("hidden")) {
        headertekst2.classList.add("hidden");
        headertekst3.classList.remove("hidden");
    }
    // 3 naar 1 //
    else if (!headertekst3.classList.contains("hidden")) {
        headertekst3.classList.add("hidden");
        headertekst1.classList.remove("hidden");
    }
}

function KlikTerug() {
    // 1 naar 3 //
    if (!headertekst1.classList.contains("hidden")) {
        headertekst1.classList.add("hidden");
        headertekst3.classList.remove("hidden");
    }
    // 3 naar 2 //
    else if (!headertekst3.classList.contains("hidden")) {
        headertekst3.classList.add("hidden");
        headertekst2.classList.remove("hidden");
    }

    else if (!headertekst2.classList.contains("hidden")) {
    // 2 naar 1 //
        headertekst2.classList.add("hidden");
        headertekst1.classList.remove("hidden");
    }
}

function sluitTab() {
    informatietab.classList.add("hidden");
}

//hamburgermenu openen//
function openMenu() {  
    hamburgermenu.classList.toggle("toonMenu");
}

//hamburgermenu sluiten//
function sluitMenu() {
  hamburgermenu.classList.remove("toonMenu");
}

// hamburgermenu sluiten door op escape te drukken //
function handleKeydown(event) {
  if (event.key == "Escape") {
    hamburgermenu.classList.remove("toonMenu");
    winkelmenu.classList.remove("toonMenu");
  }
}

//van nieuw naar themas//
function KlikopThemas() {
  themassection.classList.remove("hidden");
  nieuwsection.classList.add("hidden");
}
//van themas naar nieuw//
function KlikopNieuw() {
  nieuwsection.classList.remove("hidden");
  themassection.classList.add("hidden");
}

//mediaquery in js zorgt ervoor dat onderdelen uit de navbar zichtbaar worden als het scherm groter is dan 57em// //https://www.w3schools.com/howto/howto_js_media_queries.asp//
function myFunction(x) {
  navKnoppen.forEach(k => {
    if (x.matches) {
      k.classList.remove("hidden");
    } else {
      k.classList.add("hidden");
    }
  });
}

//Winkelenmenu openen//
function openWinkelenMenu() {  
  winkelmenu.classList.toggle("toonMenu");
}

//Winkelenmenu sluiten//
function sluitWinkelenMenu() {
  winkelmenu.classList.remove("toonMenu");
}

function resetMenus() {
    document.querySelector(".hamburgermenucontent").classList.remove("toonMenu");
    document.querySelector(".winkelenmenu").classList.remove("toonMenu");
}


// Event listeners//

//wanneer de pagina laad komt er een modal tevoorschijn//
window.addEventListener("load", () => {
   dialog.showModal();
});

knopVerder.addEventListener("click", KlikVerder);
knopTerug.addEventListener("click", KlikTerug);
sluitKnop.addEventListener("click", sluitTab);

knopVerder.addEventListener("click", KlikVerder);
knopTerug.addEventListener("click", KlikTerug);
sluitKnop.addEventListener("click", sluitTab);

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;
window.onkeydown = handleKeydown;

themasbutton.addEventListener("click", KlikopThemas);
nieuwbutton.addEventListener("click", KlikopNieuw);

myFunction(x);
x.addEventListener("change", () => myFunction(x));

openWinkelenButton.onclick = openWinkelenMenu;
sluitWinkelenButton.onclick = sluitWinkelenMenu;

window.addEventListener("resize", resetMenus);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".winkelenmenu").classList.remove("toonMenu");
    document.querySelector(".hamburgermenucontent").classList.remove("toonMenu");
});



