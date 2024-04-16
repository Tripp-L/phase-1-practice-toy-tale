let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  })
})

fetch("http://localhost:3000/toys")
  .then((resp) => resp.json())
  .then((data) => renderToys(data))

function renderToys(toyArr) {

  const toyContainer = document.querySelector('#toy-collection')

  toyArr.forEach((toyObj) => {

    console.log(toyObj)

    const card = document.createElement('div')
    card.className = 'card'

    const h2 = document.createElement('h2')
    h2.textContent = toyObj.name
    
    const img = document.createElement('img')
    img.src = toyObj.image
    img.className = 'toy-avatar'
    
    const p = document.createElement('p')
    p.textContent = toyObj.likes + " likes"
    
    const btn = document.createElement('button')
    btn.className = 'like-btn'
    btn.id = toyObj.id
    btn.textContent = 'Like ❤️'

    let currLikes = toyObj.likes

    btn.addEventListener('click', handleIncrementLikes)

    function handleIncrementLikes() {
      currLikes++ // currLikes = currLikes + 1
      p.textContent = `${currLikes} likes`
    }

    
    card.appendChild(h2)
    card.appendChild(img)
    card.appendChild(p)
    card.appendChild(btn)

    toyContainer.appendChild(card)

  })

}

const form = document.querySelector('.add-toy-form')

form.addEventListener('submit', (e) => handleAddNewToy(e))

function handleAddNewToy(e) {
  e.preventDefault()
  
  const newToyObj = {
    name : e.target.name.value,
    image : e.target.image.value,
    likes : 0,
    id : 0
  }

  renderToys([newToyObj])

}