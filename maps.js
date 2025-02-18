async function afficherMaps() {
    let response = await fetch('https://valorant-api.com/v1/maps?language=fr-FR');
    return await response.json();
}

(async () => {
    let { data } = await afficherMaps();
    data.forEach(map => 
        console.log(map)
    );
})();
