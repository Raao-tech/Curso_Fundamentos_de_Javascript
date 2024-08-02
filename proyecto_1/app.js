const guessInput = document.getElementById("guess");
const messageElement = document.getElementById("message");

const maxGuess = Number(guessInput.max);
const minGuess = Number(guessInput.min);

let randomNumber = random(maxGuess);

function checkGuess() {
  const userInput = Number(guessInput.value);

  if (isNaN(userInput) || userInput < minGuess || userInput > maxGuess) {
    messageElement.innerHTML = "Por favor, ingresa un número válido entre " + minGuess + " y " + maxGuess;
    return;
  }

  if (userInput === randomNumber) {
    console.log("ACERTASTE");
    messageElement.innerHTML = "ACERTASTE!!";
    createRetryButton();
  } else {
    messageElement.innerHTML = "Vuelve A Intentarlo!!";
  }

  console.log(userInput, randomNumber);
}

function random(max) {
  return Math.floor(Math.random() * (max - minGuess + 1)) + minGuess;
}

function createRetryButton() {
  const button = document.createElement("button");
  button.textContent = "Vuelve A Intentarlo";
  button.onclick = () => location.reload();
  messageElement.appendChild(button);
}