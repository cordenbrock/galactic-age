export default class Planets {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }
  calcMercuryAge() {
    return Math.round(this.earthAge/this.mercury);
  }
  calcVenusAge() {
    return Math.round(this.earthAge/this.venus);
  }
  calcMarsAge() {
    return Math.round(this.earthAge/this.mars);
  }
  calcJupiterAge() {
    return Math.round(this.earthAge/this.jupiter);
  }
}