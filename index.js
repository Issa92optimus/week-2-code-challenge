document.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded")
})

const charactersname = document.getElementById("id").innerHTML
const charactersvotes = document.getElementById('characterslikes');
const charactersimage =  document.getElementById('img')

  const name = document.createElement('p');

function getCharacters(data) {
  nam.innerHTML = data.name
  image.src = data.img

  }
  fetch("http://localhost:3000/characters/")
  .then (res => res.json())
  .then(data => {
      console.log(data)
      const main = document.getElementById('main')
      const details = document.getElementById('animalDetails')
      const image = document.createElement('img')

      data.forEach (character => {
          const ul = document.createElement('ul')
          const li = document.createElement('a')
          li.innerText = character.name
          li.href = '#'
          ul.appendChild(li)
          main.appendChild(ul)

      

      li.addEventListener('click', () => {
          image.src = character.image
          details.appendChild(image)

          const vote = document.createElement('p')
          vote.innerText = character.votes
          details.appendChild(vote)

           const btnVotes = document.createElement('button')
           btnVotes.innerText = 'votes'
           details.appendChild(btnVotes)

           const btnReset = document.createElement('button')
           btnReset.innerText = 'reset'
           details.appendChild(btnReset)
           
          btnVotes.addEventListener('click', () => {
            vote.innerText = `${character.votes += 1}`

          btnReset.addEventListener('click', () => {
            vote.innerText = `${character.votes = 0}`
          })
            
          })    
        })
  })
})