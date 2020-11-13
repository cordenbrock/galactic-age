import Human from './../src/js/human.js'

describe('Human', () => {
  
  let human;

  beforeEach(() => {
    human = new Human(30)
  });

  test('Should correctly construct Human object with an age property', () => {
  expect(age).toEqual(300);
  });
});  
