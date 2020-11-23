import SolarCalculator from '../src/js/solarCalculator';

describe('calcSolarAges', () => {

  let solarCalculations, earthAge, earthExpectancy;
  beforeEach(() => {
    earthAge = 30;
    earthExpectancy = 100;
    solarCalculations = new SolarCalculator(earthAge, earthExpectancy);
  });

  test('Should correctly calculate relative Mercurian age', () => {
    solarCalculations.calcMercuryAge();
    expect(solarCalculations.mercuryAge).toEqual(124);
  });
  test('Should correctly calculate relative Venusian age', () => {
    solarCalculations.calcVenusAge();
    expect(solarCalculations.venusAge).toEqual(47);
  });
  test('Should correctly calculate relative Martian age', () => {
    solarCalculations.calcMarsAge();
    expect(solarCalculations.marsAge).toEqual(15);
  });
  test('Should correctly calculate relative Jovian age', () => {
    solarCalculations.calcJupiterAge();
    expect(solarCalculations.jupiterAge).toEqual(2);
  });

// test('Should correctly instantiate Planet object', () => {
//     expect(solarCalculator).toEqual( {"earthAge": 30, "jupiterAge": 3, "marsAge": 16, "mercuryAge": 125, "venusAge": 48} );
//   });
});  


// calcMercuryAge()
// calcVenusAge()
// calcMarsAge()
// calcJupiterAge()
// calcMercuryExpectancy()
// calcVenusExpectancy()
// calcMarsExpectancy()
// calcJupiterExpectancy()