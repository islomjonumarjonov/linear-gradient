const title = document.querySelector("span");
const body = document.querySelector("body");
let input0 = document.querySelector("#input0");
let input1 = document.querySelector("#input1");
let range = document.querySelector("#degree");
const h1 = document.querySelector("h1");

body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "inherit";

function all(deg, colorFirst, colorSecond) {
  body.style.backgroundImage = `linear-gradient(${deg}deg, ${colorFirst}, ${colorSecond})`;
  title.textContent = `linear-gradient(${deg}deg, ${colorFirst}, ${colorSecond})`;
}

input0.addEventListener("input", () => {
  all(range.value, input0.value, input1.value);
});

input1.addEventListener("input", () => {
  all(range.value, input0.value, input1.value);
});

range.addEventListener("input", () => {
  all(range.value, input0.value, input1.value);
});
