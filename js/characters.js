const characters = "https://dragonball-api.com/api/characters?limit=9999";
async function fetchCharacters(){
    try{
        const response = await fetch(characters);
        if (!response.ok) {
            throw new Error(`Error in the request ${response.status}`);
        }
        return await response.json();
    }
    catch (error){
        console.error(`Error getting characters from API : `,error);
        return null;
    }
}
function createCharacterCard ({id, name, race, gender, ki, maxKi, affiliation, image}){
return `<div class="card-group">
                <div class="card" id='allCards'>
                    <img src="${image}" class="card-img-top" alt="" id='allCards'>
                    <div class="card-body" id='allCards'>
                        <h5 class="card-title" id='allCards'>${id} - ${name}</h5>
                        <h6 class="card-text" id='allCards'> Race ${race}</h6>
                        <p class="card-text"><small class="text-muted" id='descriptionCards'>Base Ki: ${ki}</small></p>
                    </div>
                </div>
            </div>
    `;
}
async function displayCharacters() {
    const charactersSection = document.getElementById('charactersCards');
    const charactersData = await fetchCharacters();

    if (charactersData && charactersData.items){
        const characterCards = charactersData.items.map(createCharacterCard).join('');
        charactersSection.innerHTML = characterCards;
    }
    else{
        charactersSection.innerHTML = `<p>The Json of the characters could not be loaded</p>`
    }
}
displayCharacters();