document.addEventListener("DOMContentLoaded", () => {
    getCharacters(characters)
})

let characterslikes = document.getElementById('characterslikes');
const characters = [
    {
        "id": 1,
        "name": "Mr. Cute",
        "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 2,
        "name": "Mx. Monkey",
        "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 3,
        "name": "Ms. Zebra",
        "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
        "votes": 0
      },
      {
        "id": 4,
        "name": "Dr. Lion",
        "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
        "votes": 0
      },
      {
        "id": 5,
        "name": "Mme. Panda",
        "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
        "votes": 0
      }
    ]



   function getCharacters(){
    let url = "http://localhost:3000/characters"
    fetch(url)
    .then (res => res.json())
    .then(data => {
        console.log(data)
        data.forEach (character => {
            display(character)
        })
    })
   }
  function display(characters) {
    console.log(characters.name);
    const name = document.createElement('p');
    name.innerHTML = characters.name
    const main = document.getElementById("main")
    main.append(name)
    name.addEventListener("click", () => {
          SingleCharacters(characters)
    })
  }
  function SingleCharacters(characters){
    document.getElementById("id").innerHTML = characters.name
    document.getElementById("pic").src = characters.image
    document.getElementById("likes").innerHTML = `likes ${characters.votes}`
  }

  let count = 0;
  document.getElementById("likes").onclick = function(){
  count+=1;
  document.getElementById("cnt").innerHTML = count;
  }
  
  document.getElementById("Reset").onclick = function(){
  count =0;
  document.getElementById("cnt").innerHTML = count;
  }