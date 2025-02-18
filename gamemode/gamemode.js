document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("conteneur_modes");

  try {
    const response = await fetch("https://valorant-api.com/v1/gamemodes");
    const data = await response.json();

    data.data.forEach((mode) => {
      const card = document.createElement("div_gamemode");
      card.classList.add("card_gamemode");
      card.innerHTML = `
                <img src="${mode.displayIcon}" alt="${mode.displayName}">
                <h2>${mode.displayName}</h2>
                <p>${
                  mode.description || "Aucune description n'est disponible"
                }</p>
            `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erreur pour fetch les gamemodes:", error);
  }
});
