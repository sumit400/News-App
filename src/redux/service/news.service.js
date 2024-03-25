export const getNewsFromApi = async (query = 'all')=> {
let response  = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=68b78beed61a4649a0783d58e1f6cd1c`)

let data = await response.json();

console.log(data)
return data.articles;
}