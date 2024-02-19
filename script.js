const colors = ["red", "green", "rgba(100,134,73)", "#ffffff"];
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    let randomNumber = randomNum();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function randomNum() {
    return Math.floor(Math.random() * colors.length);
}