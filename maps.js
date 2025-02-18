document.addEventListener('DOMContentLoaded', () => {
    async function afficherMaps() {
        let response = await fetch('https://valorant-api.com/v1/maps?language=fr-FR');
        return await response.json();
    }

    document.querySelector('nav ul li a[href="#maps"]').addEventListener('click', (event) => {
        event.preventDefault();
        (async () => {
            let { data } = await afficherMaps();
            let rowMaps = document.querySelector('#Container');
            rowMaps.innerHTML = "";

            let titreElement = document.createElement('h2');
            titreElement.classList.add('mb-4');
            titreElement.textContent = "MAPS";
            rowMaps.appendChild(titreElement);

            data.forEach(map => {
                let colElement = document.createElement('div');
                colElement.classList.add('col-lg-3', 'col-6');
                rowMaps.appendChild(colElement);

                let linkElement = document.createElement('a');
                linkElement.setAttribute('href', '#');
                linkElement.style.backgroundImage = `url(${map.splash})`;
                linkElement.classList.add('linkMaps');
                colElement.appendChild(linkElement);
            
                let titleElement = document.createElement('h3');
                titleElement.textContent = map.displayName;
                linkElement.appendChild(titleElement);
            });
        })();
    });
});


