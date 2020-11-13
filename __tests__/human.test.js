import Human from './../src/js/human.js'

describe('Human', () => {
  
  let human;

  beforeEach(() => {
    human = new Human(30, 5, 15, 25)
  });

test('Should correctly construct Human object with age and attribute properties', () => {
    expect(human.age).toEqual(30);
    expect(human.attr1).toEqual(5);
    expect(human.attr2).toEqual(15);
    expect(human.attr3).toEqual(25);
  });
});  
