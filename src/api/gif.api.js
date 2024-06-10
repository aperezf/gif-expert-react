export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LBFweV09oTBi2GPLViiwHf1iPkzS4WtC&q=${category}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json()
    return data.map(d => ({
        id: d.id,
        title: d.title,
        url: d.images.downsized_medium.url
    }));
}