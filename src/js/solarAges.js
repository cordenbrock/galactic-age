export default class SolarAges {
    constructor(earthAge) { 
    this.earthAge = earthAge;
    this.mercuryAge = Math.round(earthAge/.24);
    this.venusAge = Math.round(earthAge/.62);
    this.marsAge = Math.round(earthAge/1.88);
    this.jupiterAge = Math.round(earthAge/11.86);
    }
};