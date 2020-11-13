import Planets from './../src/js/planets';

describe('Planets', () => {
  
  let planet;
  beforeEach(() => {
    planet = new Planets(30);
  });

  test('Should correctly instantiate Planet object', () => {
  expect(planet.earthAge).toEqual(30);
  });
  test('Should correctly calculate earth age on mercury', () => {
    expect(calcMercuryAge(planet.earthAge)).toEqual();
    });
});  
