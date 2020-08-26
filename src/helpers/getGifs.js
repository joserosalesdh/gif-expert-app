

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1auQVuH0dRg2Fc2pCWwzPdCX4UFZagHm`
    // encodeURI() lo que hace es que la peticion sea correcta por mas que la categoria tenga espacios por ejemplo
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //el ? para asegurarnos de que traiga la info
        }
    })
    return gifs;
};
