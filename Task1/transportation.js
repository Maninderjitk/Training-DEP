//4 -http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(noOfDays) {
  var amount;
  if (noOfDays >= 7) {
    amount = noOfDays * 40 - 50;
  } else if (noOfDays >= 3) {
    amount = noOfDays * 40 - 20;
  } else {
    amount = noOfDays * 40;
  }
  return amount;
}