function fetchBooks() { 
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json));
}
function fetchHouse() { 
  fetch("https://anapioficeandfire.com/api/houses/")
  .then(resp => resp.json())
  .then(json => console.log(json));
}
function fetch5thBooks() { 
  fetch("https://anapioficeandfire.com/api/books/5/")
  .then(resp => resp.json())
  .then(json => console.log(json));
}
function fetchCharacter() { 
  fetch("https://anapioficeandfire.com/api/characters/1031/")
  .then(resp => resp.json())
  .then(json => console.log(json));
}
function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetch5thBooks()
  fetchHouse()
  fetchCharacter()
})
