const mykey = ""

let searchResult = document.querySelector('#searchResult')

submit = document.querySelector('#form')

const url = 'https://www.omdbapi.com/'+ '?apikey=' + mykey +'&'+'s='

const displayMovies = (arrayList) =>{
  for(let movie of arrayList){
    console.log(movie)
    console.log(movie.Poster)
    searchResult.insertAdjacentHTML('beforeend', `<h3> Titre :</h3><p>${movie.Title}</p>`)
    searchResult.insertAdjacentHTML('beforeend', `<p>${movie.Year}</p>`)
    searchResult.insertAdjacentHTML('beforeend', `<img src="${movie.Poster}" alt="poster">`)
  }
}

submit.addEventListener("submit", (event) =>{
  if (searchResult != null || searchResult != undefined){
    searchResult.remove()
  }
  document.querySelector('body').insertAdjacentHTML('afterend', `<div id="searchResult"></div>`)
  searchResult = document.querySelector('#searchResult')
  console.log(document.querySelector('#search').value)
  fetch(url + document.querySelector('#search').value)
  .then((response) => response.json())
  .then((response) => displayMovies(response.Search))
  .catch((error) => console.error('error:', error));
  event.preventDefault()
})