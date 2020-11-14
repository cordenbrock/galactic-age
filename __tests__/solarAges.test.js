import SolarAges from '../src/js/solarAges';

describe('calcSolarAges', () => {
  
  let solarAges;
  beforeEach(() => {
    solarAges = new SolarAges(30);
  });

test('Should correctly instantiate Planet object', () => {
    expect(solarAges).toEqual( {"earthAge": 30, "jupiterAge": 3, "marsAge": 16, "mercuryAge": 125, "venusAge": 48} );
  });
});  
