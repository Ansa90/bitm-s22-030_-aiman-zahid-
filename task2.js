function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const userInput = prompt("Enter a number:");

const number = parseInt(userInput);

if (isNaN(number)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  const result = checkEvenOrOdd(number);
  alert(`${number} is ${result}.`);
}