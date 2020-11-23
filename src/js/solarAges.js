export default class SolarAges {
  constructor(earthAge) { 
    this.earthAge = earthAge,
    this.mercuryAge = mercuryAge,
    this.venusAge = venusAge,
    this.marsAge = marsAge,
    this.JupiterAge = jupiterAge
  }
  calcMercuryAge() {
    this.mercuryAge = Math.round(earthAge/.24);
  }
  calcVenusAge() {
    this.venusAge = Math.round(earthAge/.62);
    }
  calcMarsAge() {
    this.marsAge = Math.round(earthAge/1.88);
  }
  calcJupiterAge() {
    this.jupiterAge = Math.round(earthAge/11.86);
  }
  calcSolarLifeExpectancies() {
    
  }
}