import Human from './../src/js/human.js'

describe('Human', () => {
  
  let human;

  beforeEach(() => {
    human = new Human(30, 5, 15, 25)
  });

test('Should correctly construct Human object with age and attribute properties', () => {
    expect(human).toEqual( {"age": 30, "this.attr1": 5, "this.attr2": 15, "this.attr3": 25, "this.lifeExpectancy": 100} );
  });
});  
