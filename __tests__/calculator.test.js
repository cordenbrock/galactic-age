import { CalcSolarAges, CalcSolarLifeExpectancies } from '../src/js/calculator';

describe('CalcSolarAges', () => {

test('Should correctly calculate solar ages', () => {
    expect(new CalcSolarAges(30)).toEqual( {"earthAge": 30, "jupiterAge": 3, "marsAge": 16, "mercuryAge": 125, "venusAge": 48} );
  });
  
});  
