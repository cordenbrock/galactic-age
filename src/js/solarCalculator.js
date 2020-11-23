export default class SolarCalculator {
  constructor(earthAge, earthExpectancy) { 
    this.earthAge = earthAge;
    this.earthExpectancy = earthExpectancy;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
    this.mercuryExpectancy;
    this.venusExpectancy;
    this.marsExpectancy;
  }
  calcMercuryAge() {
    this.mercuryAge = Math.round(this.earthAge / .24);
  }
  calcVenusAge() {
    this.venusAge = Math.round(this.earthAge /.62);
    }
  calcMarsAge() {
    this.marsAge = Math.round(this.earthAge / 1.88);
  }
  calcJupiterAge() {
    this.jupiterAge = Math.round(this.earthAge / 11.86);
  }
  calcMercuryExpectancy() {
    this.mercuryExpectancy = Math.round(1 / .24 * this.earthExpectancy);
  }
  calcVenusExpectancy() {
    this.venusExpectancy = Math.round(1 / .62 * this.earthExpectancy);
    }
  calcMarsExpectancy() {
    this.marsExpectancy = Math.round(1 / 1.88 * this.earthExpectancy);
  }
  calcJupiterExpectancy() {
    this.jupiterExpectancy = Math.round(1 / 11.86 * this.earthExpectancy);
  }
}