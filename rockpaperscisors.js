//deklarace funkce prijima parametr userInput a porovnává jestli je sprivně zadaná hodnota 
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "kámen" || userInput === "nůžky" || userInput === "papír" || userInput === 'bomba') {
    return userInput;
  } else {
    console.log("zadaná hodnota musí být kámen, nůžky nebo papír");
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

//funkce která přijímá funkce jako parametr a porovnává hodnoty
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomba') {
    return 'Vyhrál hráč'
  }
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
};

//funkce která spustí hru
const playGame = () => {
  const userChoice = getUserChoice("bomba");
  const computerChoice = getComputerChoice();
  console.log("dal jsi " + userChoice);
  console.log("počítač dal " + computerChoice);
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
};

playGame();