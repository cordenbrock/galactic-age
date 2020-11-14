import Human from './../src/js/human.js'

describe('Human', () => {
  
  let human;

  beforeEach(() => {
    human = new Human(30, 5, 15, 25)
  });

test('Should correctly construct Human-object with age and attribute properties', () => {
    expect(human).toEqual( {"age": 30, "attr1": 5, "attr2": 15, "attr3": 25, "lifeExpectancy": 100} );
  });
test('Should correctly calculate Earth-life-expectancy based on user-attributes', () => {
    expect(human.calcEarthLifeExpectancy()).toEqual(104.5);
  });
//test('Should correctly calculate solar-life-expectancies based on Earth-life-expectancy', () => {
//     expect().toEqual();
//   }) 
});  
