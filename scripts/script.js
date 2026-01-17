const dialog = document.querySelector("dialog");

const nieuwbutton = document.getElementById("nieuwbutton");
const themasbutton = document.getElementById("themasbutton");
const nieuwsection = document.getElementById("carouselsectie1");
const themassection = document.getElementById("carouselsectie2")

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

const openWinkelenButton = document.querySelector(".winkelenknop");
const winkelmenu = document.querySelector(".winkelenmenu");
var sluitWinkelenButton = document.querySelector(".winkelenmenusluitknop");

const carouselknopVerder = document.querySelector(".carouselbtnverder");
const carouselknopTerug = document.querySelector(".carouselbtnterug");
const carouselsets = document.querySelector('.uitgelicht ul');

//knoppen voor de navigatie in de informatietab//
function KlikVerder() {
    if (!headertekst1.classList.contains("hidden")) {
        headertekst1.classList.add("hidden");
        headertekst2.classList.remove("hidden");
    }
    else if (!headertekst2.classList.contains("hidden")) {
        headertekst2.classList.add("hidden");
        headertekst3.classList.remove("hidden");
    }
    else if (!headertekst3.classList.contains("hidden")) {
        headertekst3.classList.add("hidden");
        headertekst1.classList.remove("hidden");
    }
}

function KlikTerug() {
    if (!headertekst1.classList.contains("hidden")) {
        headertekst1.classList.add("hidden");
        headertekst3.classList.remove("hidden");
    }
    else if (!headertekst3.classList.contains("hidden")) {
        headertekst3.classList.add("hidden");
        headertekst2.classList.remove("hidden");
    }
    else if (!headertekst2.classList.contains("hidden")) {
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

// escape sluit beide menus
function escapeknopSluitMenus(event) {
  if (event.key == "Escape") {
    hamburgermenu.classList.remove("toonMenu");
    winkelmenu.classList.remove("toonMenu");
  }
}

// nieuw / themas switchen
function KlikopThemas() {
  themassection.classList.remove("hidden");
  nieuwsection.classList.add("hidden");
}
function KlikopNieuw() {
  nieuwsection.classList.remove("hidden");
  themassection.classList.add("hidden");
}

//Winkelenmenu openen/sluiten
function openWinkelenMenu() {  
  winkelmenu.classList.toggle("toonMenu");
}
function sluitWinkelenMenu() {
  winkelmenu.classList.remove("toonMenu");
}

function CarouselKlikTerug() {
  const slideWidth = carouselsets.querySelector('li').offsetWidth + parseInt(getComputedStyle(carouselsets).gap);
  carouselsets.scrollBy({ left: -slideWidth, behavior: 'smooth' });
}

function CarouselKlikVerder() {
  const slideWidth = carouselsets.querySelector('li').offsetWidth + parseInt(getComputedStyle(carouselsets).gap);
  carouselsets.scrollBy({ left: slideWidth, behavior: 'smooth' });
}

// Event listeners//
//wanneer de pagina laad komt er een modal tevoorschijn//
window.addEventListener("load", () => {
   dialog.showModal();
});

knopVerder.addEventListener("click", KlikVerder);
knopTerug.addEventListener("click", KlikTerug);
sluitKnop.addEventListener("click", sluitTab);

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;
window.onkeydown = escapeknopSluitMenus;

themasbutton.addEventListener("click", KlikopThemas);
nieuwbutton.addEventListener("click", KlikopNieuw);

openWinkelenButton.onclick = openWinkelenMenu;
sluitWinkelenButton.onclick = sluitWinkelenMenu;

carouselknopVerder.addEventListener("click", CarouselKlikVerder);
carouselknopTerug.addEventListener("click", CarouselKlikTerug);
