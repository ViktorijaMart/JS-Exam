/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;

  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.subtraction = function () {
    return this.num1 - this.num2;
  };
  this.multiplication = function () {
    return this.num1 * this.num2;
  };
  this.division = function () {
    return this.num1 / this.num2;
  };
}
