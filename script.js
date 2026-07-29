const gallery = document.getElementById("galleryNumber");

const challenge = document.getElementById("challenge");

const button = document.getElementById("spinButton");

const challenges = [

"Find something that surprises you.",

"Find an animal.",

"Find something made of gold.",

"Read one label all the way through.",

"Find your favorite object.",

"Find an object older than 1,000 years.",

"Find something blue.",

"Find an artist you've never heard of.",

"Spend one full minute looking before reading the label.",

"Find something mysterious.",

"Find something that makes you smile.",

"Imagine how this object arrived at the Met.",

"Find an object you'd take home."

];

button.addEventListener("click", spin);

function spin(){

button.disabled = true;

gallery.classList.add("spin");

let count = 0;

const interval = setInterval(()=>{

gallery.textContent =
Math.floor(Math.random()*864)+100;

count++;

if(count > 28){

clearInterval(interval);

gallery.classList.remove("spin");

gallery.textContent =
Math.floor(Math.random()*864)+100;

challenge.textContent =
challenges[Math.floor(Math.random()*challenges.length)];

button.disabled = false;

}

},80);

}
