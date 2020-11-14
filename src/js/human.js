import SolarAges from './solarAges';

export default class Human {
  constructor(age, attr1, attr2, attr3) {
    this.age = age;
    this.attr1 = attr1;
    this.attr2 = attr2;
    this.attr3 = attr3;
    this.lifeExpectancy = 100;
    this.adjustedLifeExpectancy;
    this.solarLifeExpectancies;
  }
  calcEarthLifeExpectancy() {
    this.adjustedLifeExpectancy = this.lifeExpectancy + (this.attr1/10) + (this.attr2/10) + (this.attr3/10);
    return this.adjustedLifeExpectancy;
  }
  // calcSolarLifeExpectancies() {
  //   let solarAges = new SolarAges(this.age);
  //   let solarLifeExpectancyRatio = this.adjustedLifeExpectancy/this.lifeExpectancy;
  //   for (let solarAge of solarAges) {
  //     let solarLifeExpectancies = solarAge * solarLifeExpectancyRatio;
  //   }
  //   return solarLifeExpectancies;
  // }
};