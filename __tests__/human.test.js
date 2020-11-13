import Human from './../src/js/human.js'

describe('Human', () => {
  
  let human;

  beforeEach(() => {
    human = new Human(30)
  });

  test('Should correctly construct Human object with an age and jacks property', () => {
  expect(human.age).toEqual(30);
  expect(human.jacks).toEqual();
  });
});  
