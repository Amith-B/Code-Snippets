const scene = document.getElementById("scene");
const container = document.getElementById("container");

let x = 0;
let y = 0;
let z = 0;

function rotateX(event) {
  x = event;
  scene.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}

function rotateY(event) {
  y = event;
  scene.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}

function rotateZ(event) {
  z = event;
  scene.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}

function changePerspective(event) {
  container.style.perspective = `${event}px`;
}
