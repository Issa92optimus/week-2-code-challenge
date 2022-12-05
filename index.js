const API_url = "http://localhost:3000/characters"

async function getAPI(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data)
}

getAPI(API_url);

function hideloader(){
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab = `<tr><th>id</th><th>name</th><th>image</th><th>vote</th></tr>`
    

for (r of data) {
    tab += `<tr><td>${r.id}</td><td>${r.name}</td><td>${r.image}</td><td>${r.votes}</td></tr>`
}

document.getElementById("cutest animals").innerHTML = tab;
}