const character = document.querySelector(".character");
const cactus = document.querySelector(".cactus");
const clouds = document.querySelector(".clouds");

const jump = () => {
  character.classList.add("jump");
  setTimeout(() => character.classList.remove("jump"), 600);
};

const loop = setInterval(() => {
  const cactusPosition = cactus.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const characterPosition = +window.getComputedStyle(character).bottom.replace("px", "");

  if (cactusPosition <= 116 && cactusPosition > 48 && characterPosition < 90) {
    cactus.style.left = `${cactusPosition}px`;
    cactus.style.animationName = "none";

    clouds.style.left = `${cloudsPosition}px`;
    clouds.style.animationName = "none";
    
    character.style.animationName = "none";
    character.style.bottom = `${characterPosition}px`;

    character.style.width = "95px";
    character.src = "./images/game-over.png";
    character.style.marginRight = "12px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);