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