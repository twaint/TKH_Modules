const weeklyIncome = parseInt(prompt("Enter weekly Income: "));
const foodCost = parseInt(prompt("Enter food Cost: "));
const housingCost = parseInt(prompt("Enter housing Cost: "));
const transCost = parseInt(prompt("Transportation Cost: "));
const otherCost = parseInt(prompt("Enter other Cost: "));
const yearlySavings = parseInt(prompt("Enter savings a year: "));

const totalWeekSavings = yearlySavings / 52;
const totalCost = foodCost + housingCost + transCost + otherCost;
const amountLeft = weeklyIncome - totalCost;

const makingMoney = totalWeekSavings - amountLeft;

if (makingMoney < amountLeft) {
  alert("You're on track!");
} else {
  const x = parseInt(amountLeft - makingMoney);
  alert("You need to save " + x + " amount more a week.");
}
