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
                    <div class="card-body">
                        <h1>${name}</h1>
                        <h3>${race} - ${gender}</h3>
                        <h4>Base KI:</h4>
                        <h3>${ki}</h3>
                        <h4>Total KI:</h4>
                        <h3>${maxKi}</h3>
                        <h4>Afilliation:</h4>
                        <h3>${affiliation}</h3>
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