const form = document.getElementById("form");
const ColorInput = document.querySelector('[id="fontColor"]');
const BgColorInput = document.querySelector('[id="bgColor"]');
const MyBody = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedColor = ColorInput.value;
  const selectedBgColor = BgColorInput.value;

  MyBody.style.backgroundColor = selectedBgColor;
  MyBody.style.color = selectedColor;
});

const MyMusic = document.querySelector("audio");

const currentMusic = document.querySelector("source");

const baseURL = "https://eversonv4.github.io/artigo/assets/audio/";

const changeSong = () => {
  if (currentMusic.src === baseURL + "05_Fracture.mp3") {
    currentMusic.src = baseURL + "01_The_End_of_All_We_Know.mp3";
    MyMusic.load();
  } else {
    currentMusic.src = baseURL + "05_Fracture.mp3";
    MyMusic.load();
  }
};

setInterval(() => {
  if (MyMusic.ended) {
    console.log(MyMusic.ended, "terminou");
    currentMusic.src = baseURL + "01_The_End_of_All_We_Know.mp3";
    MyMusic.load();
  }
}, 3000);
