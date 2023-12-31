function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector("button.change-color");
const span = document.querySelector("span.color");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  span.innerHTML = document.body.style.backgroundColor;
});
