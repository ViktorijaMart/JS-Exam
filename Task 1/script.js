/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function convertWeight(weight) {
  const weightLb = weight * 2.2046;
  const weightG = weight / 0.001;
  const weightOz = weight * 35.274;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const weightKg = document.getElementById("search").value;
  convertWeight(weightKg);
});
