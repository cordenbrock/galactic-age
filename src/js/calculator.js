export function CalcSolarAges(earthAge) { 
  this.earthAge = earthAge;
  this.mercuryAge = Math.round(earthAge/.24);
  this.venusAge = Math.round(earthAge/.62);
  this.marsAge = Math.round(earthAge/1.88);
  this.jupiterAge = Math.round(earthAge/11.86);
}

export function CalcSolarLifeExpectancies(lifeExpectancy) {
  this.earthExpectancy = lifeExpectancy;
  this.mercuryExpectancy = (1/.24) * lifeExpectancy;
  this.venusExpectancy = (1/.62) * lifeExpectancy;
  this.marsExpectancy = (1/1.88) * lifeExpectancy;
  this.jupiterExpectancy = (1/11.86) * lifeExpectancy;
}