import Planets from './../src/js/planets';

describe('Planets', () => {
  
  let planet;
  beforeEach(() => {
    planet = new Planets(30);
  });

  test('Should correctly instantiate Planet object', () => {
    expect(planet).toEqual( {"earthAge": 31, "jupiterAge": 2, "marsAge": 17, "mercuryAge": 126, "venusAge": 49} );
  });
  // test('Should correctly calculate earth age on mercury', () => {
  //   expect(planet.calcMercuryAge(planet.earthAge)).toEqual(125);
  // });
  // test('Should correctly calculate earth age on venus', () => {
  //   expect(planet.calcVenusAge(planet.earthAge)).toEqual(48);
  // });
  // test('Should correctly calculate earth age on mars', () => {
  //   expect(planet.calcMarsAge(planet.earthAge)).toEqual(16);
  // });
  // test('Should correctly calculate earth age on jupiter', () => {
  //   expect(planet.calcJupiterAge(planet.earthAge)).toEqual(3);
  // });
});  
