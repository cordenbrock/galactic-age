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
    expect(solarCalculations.mercuryAge).toEqual(125);
  });
  test('Should correctly calculate relative Venusian age', () => {
    solarCalculations.calcVenusAge();
    expect(solarCalculations.venusAge).toEqual(48);
  });
  test('Should correctly calculate relative Martian age', () => {
    solarCalculations.calcMarsAge();
    expect(solarCalculations.marsAge).toEqual(16);
  });
  test('Should correctly calculate relative Jovian age', () => {
    solarCalculations.calcJupiterAge();
    expect(solarCalculations.jupiterAge).toEqual(3);
  });

  test('Should correctly calculate relative Mercurian age', () => {
    solarCalculations.calcMercuryExpectancy();
    expect(solarCalculations.mercuryExpectancy).toEqual(125);
  });
  test('Should correctly calculate relative Venusian Expectancy', () => {
    solarCalculations.calcVenusExpectancy();
    expect(solarCalculations.venusExpectancy).toEqual(48);
  });
  test('Should correctly calculate relative Martian Expectancy', () => {
    solarCalculations.calcMarsExpectancy();
    expect(solarCalculations.marsExpectancy).toEqual(16);
  });
  test('Should correctly calculate relative Jovian Expectancy', () => {
    solarCalculations.calcJupiterExpectancy();
    expect(solarCalculations.jupiterExpectancy).toEqual(3);
  });




// test('Should correctly instantiate Planet object', () => {
//     expect(solarCalculator).toEqual( {"earthAge": 30, "jupiterAge": 3, "marsAge": 16, "mercuryAge": 125, "venusAge": 48} );
//   });
});  