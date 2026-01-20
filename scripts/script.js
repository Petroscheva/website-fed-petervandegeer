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
const sluitKnop = document.querySelector("header .informatietab .sluiten");
const informatietab = document.querySelector("header .informatietab");

var openButton = document.getElementById("hamburgermenu");
const hamburgermenu = document.querySelector(".hamburgermenucontent");
var sluitButton = document.querySelector(".menusluitknop");

const openWinkelenButton = document.querySelector(".winkelenknop");
const winkelmenu = document.querySelector(".winkelenmenu");
var sluitWinkelenButton = document.querySelector(".winkelenmenusluitknop");

const carouselknopVerder = document.querySelector(".carouselbtnverder");
const carouselknopTerug = document.querySelector(".carouselbtnterug");
const carouselsets = document.querySelector('.uitgelicht ul');

let mediaQueryDesktop = window.matchMedia("(min-width: 900px)");
let footerDetails = document.querySelectorAll("footer details");

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

function sluitTab(event) {
  event.preventDefault();
  event.stopPropagation(); // Het menu sloot niet meer, doordat de modal er bovenop zat, dus dit moest alleen het menu sluiten. Ik heb gebruik gemaakt van: https://www.w3schools.com/jquery/event_stoppropagation.asp#:~:text=The%20event.,was%20called%20for%20the%20event //
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

// escape sluit beide menus //
function escapeknopSluitMenus(event) {
  if (event.key == "Escape") {
    hamburgermenu.classList.remove("toonMenu");
    winkelmenu.classList.remove("toonMenu");
  }
}

// nieuw / themas switchen //
function KlikopThemas() {
  themassection.classList.remove("hidden");
  nieuwsection.classList.add("hidden");
}
function KlikopNieuw() {
  nieuwsection.classList.remove("hidden");
  themassection.classList.add("hidden");
}

//Winkelenmenu openen/sluiten //
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

// Automatisch details open zetten als de mediaquery matcht. Informatie over details van: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details //
function zetFooterDetailsOpen() {
  if (mediaQueryDesktop.matches) {
    footerDetails.forEach(function(details) {
      details.setAttribute("open", "");
    });
  } else {
    footerDetails.forEach(function(details) {
      details.removeAttribute("open");
    });
  }
}

zetFooterDetailsOpen();


// Event listeners //
//wanneer de pagina laad komt er een modal tevoorschijn//
window.addEventListener("load", () => {
   if (dialog) {
     dialog.showModal();
   }
});

if (knopVerder) {
  knopVerder.addEventListener("click", KlikVerder);
}
if (knopTerug) {
  knopTerug.addEventListener("click", KlikTerug);
}
if (sluitKnop) {
  sluitKnop.addEventListener("click", sluitTab);
}

if (openButton) {
  openButton.onclick = openMenu;
}
if (sluitButton) {
  sluitButton.onclick = sluitMenu;
}
window.onkeydown = escapeknopSluitMenus;

if (themasbutton) {
  themasbutton.addEventListener("click", KlikopThemas);
}
if (nieuwbutton) {
  nieuwbutton.addEventListener("click", KlikopNieuw);
}

if (openWinkelenButton) {
  openWinkelenButton.onclick = openWinkelenMenu;
}
if (sluitWinkelenButton) {
  sluitWinkelenButton.onclick = sluitWinkelenMenu;
}

if (carouselknopVerder && carouselsets) {
  carouselknopVerder.addEventListener("click", CarouselKlikVerder);
}
if (carouselknopTerug && carouselsets) {
  carouselknopTerug.addEventListener("click", CarouselKlikTerug);
}

mediaQueryDesktop.addEventListener("change", zetFooterDetailsOpen);
