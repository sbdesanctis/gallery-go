const gallery = document.getElementById("galleryNumber");

const challenge = document.getElementById("challenge");

const button = document.getElementById("spinButton");

const challenges = [

"Find something that surprises you.",

"Read one label all the way through.",

"Find your favorite object.",

"Find the oldest object in the room.",

"Find an artist you've never heard of.",

"Spend one full minute looking before reading the label.",

"Find something mysterious.",

"Find something that makes you smile.",


"Find an object you'd take home."

];
const galleries = [
    ...range(101, 138),
    ...range(150, 170),
    ...range(173, 176),
    ...range(200, 253),
    ...range(300, 307),
    ...range(341, 345),
    ...range(350, 354),
    ...range(360, 363),
    ...range(370, 380),
    ...range(400, 405),
    ...range(450, 464),
    ...range(500, 555),
    ...range(600, 630),
    ...range(680, 684),
    ...range(691, 693),
    ...range(700, 745),
    ...range(800, 830),
    851,
    852,
    ...range(950, 960)
];

function range(start, end) {
    return Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
    );
}
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
galleries[Math.floor(Math.random()*galleries.length)];

challenge.textContent =
challenges[Math.floor(Math.random()*challenges.length)];

button.disabled = false;

}

},80);

}
