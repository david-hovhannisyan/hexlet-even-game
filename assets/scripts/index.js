const ROUNDS_COUNT = 3;

const isEven = (number) => number % 2 === 0;
const normalizeString = (str) => str.toLowerCase().trim();
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const play = () => {
  const userName = prompt("Как тебя зовут?");
  if (!userName) {
    alert("До свидания!");
    return;
  }
  alert(`Привет, ${userName}!`);

  for (let round = 0; round < ROUNDS_COUNT; round++) {
    const randomNumber = getRandomInt(0, 100);
    const correctAnswer = isEven(randomNumber) ? "да" : "нет";

    const userAnswer = prompt(`Число ${randomNumber} чётное?`);

    if (!userAnswer) {
      alert("До свидания!");
      return;
    }

    const normalizedUserAnswer = normalizeString(userAnswer);

    if (normalizedUserAnswer !== correctAnswer) {
      alert("Неправильно!");
      return;
    }

    alert("Правильно!");
  }
 
  alert("Вы выиграли!");
};

const button = document.getElementById("even-game-button");
button.addEventListener("click", play);
