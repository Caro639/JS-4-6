// setItem
// localStorage.setItem("firstName", "Carole");
// localStorage.setItem("lastName", "Werner");

//getItem
let firstName = localStorage.getItem("first_name");
console.log(firstName);

// suppression
// localStorage.clear("first_name");

// stocker un tableau dans le localStorage
let array = ["Carole", "Werner", "Caroline", "Léa"];
console.log(array);

// JSON.stringify pour encoder => transformer tableau
let jsonArray = JSON.stringify(array); // string représente un tableau
console.log(jsonArray);
localStorage.setItem("array", jsonArray);

// decoder JSON
let arrayFromStorage = localStorage.getItem("array");

let arrayDecoded = JSON.parse(arrayFromStorage); // transforme le string en tableau
console.log(arrayDecoded);
