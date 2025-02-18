async function fetchAgents() {
    try {
        const response = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true");
        const data = await response.json();
        const agents = data.data;

        const container = document.querySelector("#agentsContainer");
        container.innerHTML = "";

        agents.forEach(agent => {
            const card = document.createElement("div");
            card.classList.add("agent-card");

            card.innerHTML = `
                <img src="${agent.displayIcon}" alt="${agent.displayName}">
                <h3>${agent.displayName}</h3>
                <p><strong>Rôle:</strong> ${agent.role ? agent.role.displayName : 'N/A'}</p>
                <p>${agent.description}</p>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des agents :", error);
    }
}


function toggleAgentsTable() {
    const table = document.getElementById("agentsTable");
    table.style.display = table.style.display === "none" ? "table" : "none";
           fetchAgents();
}


function toggleAgentsContainer() {
    const container = document.getElementById("agentsContainer");
    const isHidden = container.style.display === "none";

    container.style.display = isHidden ? "flex" : "none";
    fetchAgents();
}