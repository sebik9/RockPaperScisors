//deklarace proměných pro funkce
const userChoiceInput = document.getElementById('user-choice');
const userChoiceDisplay = document.getElementById('user-choice-display');
const computerChoiceDisplay = document.getElementById('computer-choice-display');
const resultDisplay = document.getElementById('result-display');

//deklarace funkce prijima parametr userInput a porovnává jestli je sprivně zadaná hodnota 
const getUserChoice = () => {
  const userInput = userChoiceInput.value.toLowerCase();
  if (userInput === "kámen" || userInput === "nůžky" || userInput === "papír") {
    displayGameResult(userInput);
  } else {
    alert("Zadaná hodnota musí být kámen, nůžky nebo papír.");
  }
};

//funkce co generuje výběr PC za pomocí náhodného čísla a case switch
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "kámen";
    case 1:
      return "nůžky";
    case 2:
      return "papír";
  }
};

//funkce pro zobrazení výsledku hry
const displayGameResult = userChoice => {
  const computerChoice = getComputerChoice();
  userChoiceDisplay.textContent = 'Tvoje volba: ' + userChoice;
  computerChoiceDisplay.textContent = 'Volba počítače: ' + computerChoice;
  const result = determineWinner(userChoice, computerChoice);
  resultDisplay.textContent = 'Výsledek: ' + result;
};

//funkce která přijímá funkce jako parametr a porovnává hodnoty
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "remíza";
  }
  if (userChoice === "kámen") {
    if (computerChoice === "papír") {
      return "vyhrál počítač";
    } else {
      return "Vyhrál hráč";
    }
  }
  if (userChoice === "papír") {
    if (computerChoice === "nůžky") {
      return "Vyhrál počítač";
    } else {
      return "Vyhrál hráč";
    }
  }
  if (userChoice === "nůžky") {
    if (computerChoice === "kámen") {
      return "počítač vyhrál";
    } else {
      return "vyhrál hráč";
    }
  }
  return result;
};