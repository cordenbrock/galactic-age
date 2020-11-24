import Human from './../src/js/human.js'

describe('Human', () => {
  
  let human, surpassedExpectancyHuman;
  beforeEach(() => {
    human = new Human(30, 5, 15, 25);
    human.calcAdjustedLifeExpectancy();
    surpassedExpectancyHuman = new Human(110, 0, 0, 0)
    surpassedExpectancyHuman.calcAdjustedLifeExpectancy();
  });

  test('Should correctly calculate Earth-life-expectancy based on user-attributes', () => {
    expect(human.adjustedLifeExpectancy).toEqual(105);
  });
  test('Should correctly calculate how many solar life years that the user has remaining on a planet', () => {
    human.compareAgeAndLifeExpectancies(human.age, human.adjustedLifeExpectancy);
    expect(human.yearsLeft).toEqual(75);
  });
  test('Should correctly calculate how many solar life years that the user has surpassed in expectancy on a planet', () => {
    surpassedExpectancyHuman.compareAgeAndLifeExpectancies(surpassedExpectancyHuman.age, surpassedExpectancyHuman.adjustedLifeExpectancy);
    expect(surpassedExpectancyHuman.yearsSurpassed).toEqual(10);
  });
});  
