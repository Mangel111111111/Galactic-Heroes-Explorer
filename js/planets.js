const planets = "https://dragonball-api.com/api/planets?limit=9999";

async function fetchPlanets(){
    try{
        const response = await fetch(planets);
        if (!response.ok) {
            throw new Error(`Error en la peticion ${response.status}`);
        }
        return await response.json();
    }
    catch (error){
        console.error(`Error al obtener los planetas de la API : `,error);
        return null;
    }
}
function createPlanetCard ({name, description, image}){
    return `<div class="card-group">
                    <div class="card" id='allCards'>
                        <img src="${image}" class="card-img-top""cardImgTop" alt="" id='allCards'>
                        <div class="card-body">
                            <h1>${name}</h1>
                            <h3>${description}</h3>
                        </div>
                    </div>
                </div>
        `;
    }
    async function displayPlanets() {
        const planetsSection = document.getElementById('planetsCards');
        const planetsData = await fetchPlanets();
    
        if (planetsData && planetsData.items){
            const planetCards = planetsData.items.map(createPlanetCard).join('');
            planetsSection.innerHTML = planetCards;
        }
        else{
            planetsSection.innerHTML = `<p>The Json of the planets could not be loaded</p>`
        }
    }
    displayPlanets();