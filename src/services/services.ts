const URLAPI = "https://rickandmortyapi.com/api/";

export async function getCharacters(endPoint: string){
    try {
    const res = await fetch(`${URLAPI}${endPoint}`);
    const data = await res.json();
    return data;
    } catch (error) {
         return { info: { pages: 1 }, results: [] };
    }
    
}


