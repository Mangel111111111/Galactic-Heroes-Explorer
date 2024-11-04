const characters = "https://dragonball-api.com/api/characters?limit=9999";
const planets = "https://dragonball-api.com/api/planets?limit=9999";

async function fetchCharacters(){
    try{
        const response = await fetch(characters);
        if (!response.ok) {
            throw new Error(`Error en la peticion ${response.status}`);
        }
        return await response.json();
    }
    catch (error){
        console.error(`Error al obtener los personajes de la API : `,error);
        return null;
    }
}

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

function createCharacterCard ({id, name, image, ki, description}){
    return `<div class="card-group">
                <div class="card" id='allCards'>
                    <img src="${image}" class="card-img-top" alt="" id='allCards'>
                    <div class="card-body" id='allCards'>
                        <h5 class="card-title" id='allCards'>${id} - ${name}</h5>
                        <h6 class="card-text" id='allCards'>€ ${ki}</h6>
                        <p class="card-text"><small class="text-muted" id='descriptionCards'>${description}</small></p>
                    </div>
                </div>
            </div>
    `;
}