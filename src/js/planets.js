export default class Planets {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = Math.round(earthAge/.24);
    this.venusAge = Math.round(earthAge/.62);
    this.marsAge = Math.round(earthAge/1.88);
    this.jupiterAge = Math.round(earthAge/11.86);
  }
  // calcMercuryAge() {
  //   return Math.round(this.earthAge/this.mercury);
  // }
  // calcVenusAge() {
  //   return Math.round(this.earthAge/this.venus);
  // }
  // calcMarsAge() {
  //   return Math.round(this.earthAge/this.mars);
  // }
  // calcJupiterAge() {
  //   return Math.round(this.earthAge/this.jupiter);
  // }
}