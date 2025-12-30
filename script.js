let gameStarted = false;

function generateNumber() {
    let numberBox = document.getElementById("number");
    let button = document.querySelector("button");

    if (!gameStarted) {
        let lucky = Math.floor(Math.random() * 10 * 10) + 1;
        numberBox.innerHTML = lucky;

        button.innerHTML = "Restart Game";
        gameStarted = true;
    } else {
        numberBox.innerHTML = "?";
        button.innerHTML = "Get Lucky Number";
        gameStarted = false;
    }
}
