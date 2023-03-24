export const game = (element: any, randomElement: any) => {
  if (element == "rock") {
    if (randomElement == "paper") {
      return "LOSE";
    } else if (randomElement == "scissors") {
      return "WIN";
    }
  } else if (element == "paper") {
    if (randomElement == "rock") {
      return "WIN";
    } else if (randomElement == "scissors") {
      return "LOSE";
    }
  } else {
    if (randomElement == "paper") {
      return "WIN";
    } else if (randomElement == "rock") {
      return "LOSE";
    }
  }
  return "DRAW";
};
