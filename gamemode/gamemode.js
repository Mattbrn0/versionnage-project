document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("Container");
  const loadButton = document.getElementById("#gamemode");

  const loadGameModes = async () => {
    container.innerHTML = "";

    try {
      const response = await fetch("https://valorant-api.com/v1/gamemodes");
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        data.data.forEach((mode) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
                        <img src="${mode.displayIcon}" alt="${
            mode.displayName
          }">
                        <h2>${mode.displayName}</h2>
                        <p>${mode.description || "No description available"}</p>
                    `;
          container.appendChild(card);
        });
      } else {
        container.innerHTML = "<p>No game modes found.</p>";
      }
    } catch (error) {
      console.error("Error fetching game modes:", error);
      container.innerHTML = "<p>Failed to load game modes.</p>";
    }
  };

  loadButton.addEventListener("click", loadGameModes);
});
