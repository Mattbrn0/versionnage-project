async function getWeapons() {
  try {
    const response = await fetch("https://valorant-api.com/v1/weapons");
    const result = await response.json();

    if (!result || !result.data || !Array.isArray(result.data)) {
      throw new Error("Les données de l'API sont invalides");
    }

    const weapons = result.data;

    displayWeapons(weapons);
  } catch (error) {
    console.error("Erreur lors de la récupération des armes :", error);
  }
}

function displayWeapons(weapons) {
  const container = document.getElementById("Container");
  container.innerHTML = "";

  weapons.forEach((weapon) => {
    if (!weapon.displayIcon || !weapon.displayName) return;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${weapon.displayIcon}" alt="${weapon.displayName}">
        <h2>${weapon.displayName}</h2>
        <p>Catégorie : ${weapon.category.replace(
          "EEquippableCategory::",
          ""
        )}</p>
      `;

    container.appendChild(card);
  });
}
