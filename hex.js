const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    let randomNumber = "#";
    for (let i = 0; i < 6; i++) {
        randomNumber += colors[randomNum()];
    }
    console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
});
function randomNum() {
    return Math.floor(Math.random() * colors.length);
}