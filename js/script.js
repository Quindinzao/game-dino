const dinovana = document.querySelector(".love-of-my-life");
const character = document.querySelector(".character");
const cactus = document.querySelector(".cactus");
const clouds = document.querySelector(".clouds");
const score = document.querySelector(".score");
const dialog = document.querySelector(".dialog");
let scoreNumber = 0;
let stop = false;

const jump = () => {
  character.classList.add("jump");
  setTimeout(() => character.classList.remove("jump"), 600);
};

const scored = setInterval(() => {
  if (!stop && scoreNumber < 21) {
    scoreNumber = scoreNumber + 1;
    score.innerHTML = "";
    score.innerHTML = scoreNumber;
  } else {
    clearInterval(scored);
  }
}, 1000);

const loop = setInterval(() => {
  const cactusPosition = cactus.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const characterPosition = +window.getComputedStyle(character).bottom.replace("px", "");

  if (cactusPosition <= 124 && cactusPosition > 48 && characterPosition < 90) {
    cactus.style.left = `${cactusPosition}px`;
    cactus.style.animationName = "none";

    clouds.style.left = `${cloudsPosition}px`;
    clouds.style.animationName = "none";
    
    character.style.animationName = "none";
    character.style.bottom = `${characterPosition}px`;

    character.style.width = "95px";
    character.src = "./images/game-over.png";
    character.style.marginRight = "12px";

    stop = true;
    clearInterval(loop);
  }

  if (scoreNumber === 21) {
    cactus.style.display = "none";
    clouds.style.animationName = "none";

    dinovana.style.display = "flex";
    dinovana.style.animationName = "dinovana-animation";

    character.style.width = "95px";
    character.style.display = "flex";
    character.style.left = "40%";
    character.style.animationName = "character-animation";
    character.src = "./images/game-over.png";

    setInterval(() => {
      dialog.style.display = "flex";
      dialog.innerHTML = "Dinovana Limoni, meu amor por você é igual àquela estrela estranha que apareceu no céu: aumenta a cada dia que passa... Então, eu te pergunto: quer namorar comigo? :)";
    }, 4000)
  }
}, 10);

document.addEventListener("keydown", jump);