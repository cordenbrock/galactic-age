import { CalcSolarAges, CalcSolarLifeExpectancies } from '../src/js/calculator';

describe('CalcSolarAges', () => {

test('Should correctly calculate solar ages', () => {
    expect(new CalcSolarAges(30)).toEqual( {"earthAge": 30, "jupiterAge": 3, "marsAge": 16, "mercuryAge": 125, "venusAge": 48} );
  });
  test('Should correctly calculate solar life expectancies to nearest integer', () => {
    expect(new CalcSolarLifeExpectancies(105)).toEqual( {"earthExpectancy": 105, "mercuryExpectancy": 438, "venusExpectancy": 169, "marsExpectancy": 56, "jupiterExpectancy": 9} );
  });
});