import { Book } from "./Book.js";
import { UI } from "./UI.js";
const ui = new UI();
document.querySelector("#book-form").addEventListener("submit", dodaj);
document.querySelector("#book-list").addEventListener("click", brisi);

function dodaj(e) {
  e.preventDefault();
  let podaci = UI.pokupiSaForme();
  // console.log(podaci);
  const knjiga = new Book(podaci.title, podaci.author, podaci.isbn);
  // console.log(knjiga);
  if (podaci.title == "" || podaci.author == "" || podaci.isbn == "") {
    ui.prikaziPoruku("Nisu uneti svi podaci", "error");
  } else {
    ui.prikaziKnjigu(knjiga);
    ui.prikaziPoruku("Knjiga je uspesno dodata", "success");
    ui.brisiPolja();
  }
}

function brisi(e) {
  ui.brisiKnjigu(e.target);
}
