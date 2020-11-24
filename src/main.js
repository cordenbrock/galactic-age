import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Human from './js/human.js';
import SolarCalculator from './js/solarCalculator.js';

$('#form').on("submit", function(e) {
  e.preventDefault();
  let ageInput, attrOneInput, attrTwoInput, attrThreeInput;
  ageInput = parseInt($('#age').val());
  attrOneInput = parseInt($('#bozos').val());
  attrTwoInput = parseInt($('#tusks').val());
  attrThreeInput = parseInt($('#sagan').val());

  let human, solarCalculations;
  human = new Human(ageInput, attrOneInput, attrTwoInput, attrThreeInput);
  human.calcAdjustedLifeExpectancy();
  solarCalculations = new SolarCalculator(human.age, human.adjustedLifeExpectancy);
  solarCalculations.calcMercuryAge();
  solarCalculations.calcVenusAge();
  solarCalculations.calcMarsAge();
  solarCalculations.calcJupiterAge();
  solarCalculations.calcMercuryExpectancy();
  solarCalculations.calcVenusExpectancy();
  solarCalculations.calcMarsExpectancy();
  solarCalculations.calcJupiterExpectancy();
  
  human.compareAgeAndLifeExpectancies(solarCalculations.mercuryAge, solarCalculations.mercuryExpectancy);
  $('#mercury-output').text(`Age on Mercury: ${solarCalculations.mercuryAge}. Life Expectancy here: ${solarCalculations.mercuryExpectancy}. `);
  human.yearsLeft ? $('#mercury-output').append(`Years Left: ${human.yearsLeft}`) : $('#mercury-output').append(`Years passed in life expectancy: ${human.yearsSurpassed}`);

  human.compareAgeAndLifeExpectancies(solarCalculations.venusAge, solarCalculations.venusExpectancy);
  $('#venus-output').text(`Age on Venus: ${solarCalculations.venusAge}. Life Expectancy here: ${solarCalculations.venusExpectancy}. `);
  human.yearsLeft ? $('#venus-output').append(`Years Left: ${human.yearsLeft}`) : $('#venus-output').append(`Years passed in life expectancy: ${human.yearsSurpassed}`);

  human.compareAgeAndLifeExpectancies(solarCalculations.earthAge, solarCalculations.earthExpectancy);
  $('#earth-output').text(`Age on earth: ${solarCalculations.earthAge}. Life Expectancy here: ${solarCalculations.earthExpectancy}. `);
  human.yearsLeft ? $('#earth-output').append(`Years Left: ${human.yearsLeft}`) : $('#earth-output').append(`Years passed in life expectancy: ${human.yearsSurpassed}`);

  human.compareAgeAndLifeExpectancies(solarCalculations.marsAge, solarCalculations.marsExpectancy);
  $('#mars-output').text(`Age on mars: ${solarCalculations.marsAge}. Life Expectancy here: ${solarCalculations.marsExpectancy}. `);
  human.yearsLeft ? $('#mars-output').append(`Years Left: ${human.yearsLeft}`) : $('#mars-output').append(`Years passed in life expectancy: ${human.yearsSurpassed}`);

  human.compareAgeAndLifeExpectancies(solarCalculations.jupiterAge, solarCalculations.jupiterExpectancy);
  $('#jupiter-output').text(`Age on jupiter: ${solarCalculations.jupiterAge}. Life Expectancy here: ${solarCalculations.jupiterExpectancy}. `);
  human.yearsLeft ? $('#jupiter-output').append(`Years Left: ${human.yearsLeft}`) : $('#jupiter-output').append(`Years passed in life expectancy: ${human.yearsSurpassed}`);
});