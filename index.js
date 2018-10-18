const main = document.querySelector('main')

function renderName(obj) {
  const h2 = document.createElement('h2')
  h2.innerHTML = `<h2>${obj.name}</h2>`
  main.appendChild(h2)
}

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books/')
  .then(response => response.json())
  .then(json => console.log('here are all the books:\n', json));
}

function fetchBook() {
  fetch('https://anapioficeandfire.com/api/books/5')
  .then(response => response.json())
  .then(json => renderBook(json));
}

function fetchCharacter() {
  fetch('https://anapioficeandfire.com/api/characters/1031')
  .then(response => response.json())
  .then(json => renderCharacter(json));
}

function fetchHouses() {
  fetch('https://anapioficeandfire.com/api/houses/')
  .then(response => response.json())
  .then(json => renderHouses(json));
}

function renderBook(book) {
  renderName(book)
}

function renderCharacter(character) {
  renderName(character)
}

function renderHouses(houses) {
  houses.forEach(house => renderName(house))
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  fetchBook()
  fetchCharacter()
  fetchHouses()
})
