let formAdopt = document.querySelector("#adoptPet");

let cardPet = document.querySelector(".card-pets");

// ecouter le formulaire
formAdopt.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;

  name.innerHTML = "";
  console.log(name);

  // set valeur de l animal nom ds le localStorage
  localStorage.setItem("name", name);

  let race = document.querySelector("#species").value;

  race.innerHTML = "";

  cardPet.innerHTML = "";

  // set race de l'animal dans le localStorage
  localStorage.setItem("race", race);

  // créer element html
  cardPet.insertAdjacentHTML("beforeend", `<p class="card">${name}</p>`);

  cardPet.insertAdjacentHTML("beforeend", `<p class="card">${race}</p>`);
});

// recup valeurs du localStorage
let nameValue = localStorage.getItem("name");
let raceValue = localStorage.getItem("race");

// si la valeur est vide on n'affiche rien suppr null
if (nameValue !== null && raceValue !== null) {
  cardPet.insertAdjacentHTML("beforeend", `<p class="card">${nameValue}</p>`);

  cardPet.insertAdjacentHTML("beforeend", `<p class="card">${raceValue}</p>`);
}

// relacher animal button suppr animaux
let relacher = document.querySelector(".relacher");

relacher.addEventListener("click", function () {
  localStorage.clear("name");
  localStorage.clear("race");

  cardPet.innerHTML = "";
});
