let collectionForm = document.querySelector("#collection");

let collectionCard = document.querySelector(".collection-card");

// formulaire
collectionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let nameCarte = document.querySelector("#nameCarte").value;

  nameCarte.innerHTML = "";

  let typeCart = document.querySelector("#type").value;
  typeCart.innerHTML = "";

  let pouvoirCarte = document.querySelector("#pouvoir").value;
  pouvoirCarte.innerHTML = "";

  // create object carte
  let mysteryCart = {
    nameCarte: nameCarte,
    type: typeCart,
    pouvoir: pouvoirCarte,
  };
  console.log(mysteryCart);

  // convert object to JSON
  let jsonMysteryCart = JSON.stringify(mysteryCart);

  // save in localStorage
  localStorage.setItem("mysteryCart", jsonMysteryCart);

  console.log(jsonMysteryCart);

  // create array to store the cards
  let mysteryCartArray =
    JSON.parse(localStorage.getItem("mysteryCartArray")) || [];
  // Ajoute l'objet carte to array
  mysteryCartArray.push(mysteryCart);

  // set element in localStorage
  // Convert the array to JSON and save it
  localStorage.setItem("mysteryCartArray", JSON.stringify(mysteryCartArray));

  console.log(mysteryCartArray);
});

let mysteryCartFromStorage = localStorage.getItem("mysteryCart");
let mysteryCartDecoded = JSON.parse(mysteryCartFromStorage);

console.log(mysteryCartDecoded);

// Clear the collection card before adding new content
collectionCard.innerHTML = "";

if (mysteryCartDecoded !== null) {
  collectionCard.insertAdjacentHTML(
    "beforeend",
    `<h2>${mysteryCartDecoded.nameCarte}</h2>`
  );
  collectionCard.insertAdjacentHTML(
    "beforeend",
    `<p class="paragraphe">${mysteryCartDecoded.type}</p>`
  );
  collectionCard.insertAdjacentHTML(
    "beforeend",
    `<p class="pouvoir">${mysteryCartDecoded.pouvoir}</p>`
  );
}

//afficher toutes les cartes
let allCards = localStorage.getItem("mysteryCartArray");
let allCardsDecoded = JSON.parse(allCards);

if (allCardsDecoded !== null) {
  collectionCard.innerHTML = "";
  allCardsDecoded.forEach((card) => {
    collectionCard.insertAdjacentHTML(
      "beforeend",
      `<div class="carte-container">
      <h2 class="carte">${card.nameCarte}</h2>
      <p class="paragraphe">${card.type}</p>
      <p class="pouvoir">${card.pouvoir}</p>
    </div>`
    );
  });
}
console.log(allCardsDecoded);
