async function fetchAgents() {
    try {
        const response = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true");
        const data = await response.json();
        const agents = data.data;

        const tableBody = document.querySelector("#agentsTable tbody");
        tableBody.innerHTML = "";

        agents.forEach(agent => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${agent.displayIcon}" alt="${agent.displayName}" width="50"></td>
                <td>${agent.displayName}</td>
                <td>${agent.role ? agent.role.displayName : 'N/A'}</td>
                <td>${agent.description}</td>
            `;
            tableBody.appendChild(row);
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


