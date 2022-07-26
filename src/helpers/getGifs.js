export const getGifs = async(category) => {

  const url = `http://api.giphy.com/v1/gifs/search?api_key=nrHvnUxtQLAcnJNdSZ4BFVx1j8sR5x3c&q=${category}&limit=8`
  const resp = await fetch( url )
  const {data} = await resp.json();

  console.log(data);

  const gifs = data.map ( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  
return gifs;
}