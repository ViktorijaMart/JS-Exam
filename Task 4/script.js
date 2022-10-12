/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const renderBrandsCard = (brands) => {
  const output = document.getElementById("output");
  brands.forEach((brand) => {
    const card = document.createElement("div");
    card.setAttribute("id", "card");

    const brandName = document.createElement("h1");
    brandName.textContent = brand.brand;

    const modelContainer = document.createElement("div");
    modelContainer.setAttribute("id", "model_container");
    const models = brand.models;
    models.forEach((model) => {
      const modelName = document.createElement("p");
      modelName.textContent = model;
      modelContainer.append(modelName);
    });

    card.append(brandName, modelContainer);
    output.append(card);
  });
};

const fetchBrands = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      renderBrandsCard(data);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchBrands();
