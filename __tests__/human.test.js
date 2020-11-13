import Human from './../src/js/human.js'

describe('Human', () => {
  
  let human;

  beforeEach(() => {
    human = new Human(30, 5, 15, 25)
  });

test('Should correctly construct Human object with age and attribute properties', () => {
    expect(human).toEqual( {"age": 30, "attr1": 5, "attr2": 15, "attr3": 25, "lifeExpectancy": 100} );
  });
});  
