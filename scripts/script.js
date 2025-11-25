const dialog = document.querySelector("dialog");
const nieuw = document.getElementById("sectie1")
const themas = document.getElementById("sectie2")

//van nieuw naar themas//
function KlikopThemas() {
  themas.classList.remove("hidden")
  nieuw.classList.add("hidden")
}
//van themas naar nieuw//
function KlikopNieuw() {
  nieuw.classList.remove("hidden")
  themas.classList.add("hidden")
}


//wanneer de pagina laad komt er een modal tevoorschijn//
window.addEventListener("load", () => {
  dialog.showModal();
});