const URL = "https://pokeapi.co/api/v2/";

export async function fetchAll() {
    const result = await fetch(`${URL}pokemon?limit=100000&offset=0`);
    return result.json();
}

export async function fetchByName(name) {
    const result = await fetch(`${URL}pokemon/${name}`);
    return result.json();
}
