//4 -http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
    var noOfDays=d;
    var amount;
    if(noOfDays<=2){
      amount=noOfDays*40
      return amount;
    }
    if(noOfDays>=3&& noOfDays<=6){
      amount=noOfDays*40-20;
      return amount;
    }
    if(noOfDays>=5){ 
      amount=noOfDays*40-50;
      return amount;
    }
}