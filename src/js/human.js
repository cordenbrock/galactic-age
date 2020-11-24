export default class Human {
  constructor(age, attr1, attr2, attr3) {
    this.age = age;
    this.attr1 = attr1;
    this.attr2 = attr2;
    this.attr3 = attr3;
    this.lifeExpectancy = 100;
    this.adjustedLifeExpectancy;
    this.yearsLeft;
    this.yearsSurpassed;
  }
  calcAdjustedLifeExpectancy() {
    this.adjustedLifeExpectancy = Math.round(this.lifeExpectancy + (this.attr1/10) + (this.attr2/10) + (this.attr3/10));
  }
  compareAgeAndLifeExpectancies(currentAge, expectancyAge) {
    if (currentAge <= expectancyAge) {
      this.yearsLeft = expectancyAge - currentAge;
    } else {
      this.yearsSurpassed = currentAge - expectancyAge;
    }
  }
}
