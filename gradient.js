const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hex2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const color2 = document.querySelector(".color2");


btn.addEventListener("click", function () {
  let hexColor = "#";
  let hexColor2 = "#"
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    hexColor2 += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  color2.textContent = hexColor2;

  document.body.style.background = `linear-gradient(${hexColor}, ${hexColor2})`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}






