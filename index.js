
function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function renderFifthBook(json) {
  const h2 = document.createElement("h2")
  h2.innerHTML = `<h2>${json.name}</h2>`
  main.appendChild(h2)
  // console.log(json.name);
}

function render1031Character(json){
  const h2 = document.createElement("h2")
  h2.innerHTML = `<h2>${json.name}</h2>`
  main.appendChild(h2)
}


function fetchBooks() {
/*All the Houses in Game of Thrones
The 5th book in the series
The 1031st character in the series*/
    fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json =>
    renderBooks(json))
  }

function fetchHouses() {
/*All the Houses in Game of Thrones
The 5th book in the series
The 1031st character in the series*/
    fetch("https://anapioficeandfire.com/api/houses")
    .then(resp => resp.json())
    .then(json =>
    renderBooks(json))
  }
  
function fetchFifthBook () {
  fetch("https://anapioficeandfire.com/api/books/5")
  .then(resp => resp.json())
  .then(json =>
  renderFifthBook(json))
}

function fetch1031stCharacter () {
  fetch("https://anapioficeandfire.com/api/characters/1031")
  .then(resp => resp.json())
  .then(json =>
  render1031Character(json))
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  fetchFifthBook()
  fetch1031stCharacter()
})
