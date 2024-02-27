let addToy = false;
const toyCollection = document.getElementById("toy-collection")

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
  });
// <div class="card">
//  <h2>Woody</h2>
//  <img src="[toy_image_url]" class="toy-avatar" />
//  <p>4 Likes</p>
//  <button class="like-btn" id="[toy_id]">Like ❤️</button>
// </div>
})
const createCard = (toy) => {
  //createCard(curToy)
  //create card for current toy
  //create needed nodes
  let toyCard = document.createElement("div");
  let toyName = document.createElement("h2");
  let toyImage = document.createElement("img");
  let toyLikes = document.createElement("p");
  let toyButton = document.createElement("button");

  cardDiv.className = "card"
  toyName.textContent = toy.name;
  toyImage.src = toy.image;
  toyImage.className = "toy-avatar";
   if(toy.Likes === 1) {
    toyLikes.textContent = `${toy.Likes} like`
   } else {
    toyLikes.textContent = `${toy.Likes} likes`
   }
  toyLikes.textContent = toy.likes;
  toyButton.textContent = "Like-btn";
  toyButton.id = toy.id;

  //append node appropriately
  toyCard.appendChild(toyName)
  toyCard.appendChild(toyImage)
  toyCard.appendChild(toyLikes)
  toyCard.appendChild(toyButton)

  //append card to toyCollection
toyCollection.append(toyCard)
}

const fetchToys = (endpoint) => {
  return fetch(`http://localhost:3000/${endpoint}`) //fetch result gets returned to next .then
  .then(res => res.json()) //res.json() result gets returned to next .then
  //.then(data => data) 
}

fetchToys("toys")
.then(toys => {

//fetchToys returns a promise, so we still need an additional .then
//.then(toys => { //equivalent 
  //for elements...
  //1. create them
  //2. write needed data (textContent, src, className, id)
  //append them to something
  console.log(toys)
    toys.forEach(curToy => {
    createCard(curToy)
    })
  })