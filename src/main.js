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
  console.log(solarCalculations);

  let mercuryAnalysis = human.compareAgeAndLifeExpectancies(solarCalculations.mercuryAge, solarCalculations.mercuryExpectancy);
  $('#mercury-output').text(`You are ${solarCalculations.mercuryAge} Mercurian years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarCalculations.mercuryExpectancy}. That means you should expect a groovy ${mercuryAnalysis} more Mercurian trips around the sun, godspeed cosmic comrade!`);
  let venusAnalysis = human.compareAgeAndLifeExpectancies(solarCalculations.venusAge, solarCalculations.venusExpectancy);
  $('#venus-output').text(`You are ${solarCalculations.venusAge} Venusian years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarCalculations.venusExpectancy}. That means you should expect a groovy ${venusAnalysis} more Venusian trips around the sun, godspeed cosmic comrade!`);
  let earthAnalysis = human.compareAgeAndLifeExpectancies(solarCalculations.earthAge, solarCalculations.earthExpectancy);
  $('#earth-output').text(`You are ${solarCalculations.earthAge} Earth years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarCalculations.earthExpectancy}. That means you should expect a groovy ${earthAnalysis} more Earthly trips around the sun, godspeed cosmic comrade!`);
  let marsAnalysis = human.compareAgeAndLifeExpectancies(solarCalculations.marsAge, solarCalculations.marsExpectancy);
  $('#mars-output').text(`You are ${solarCalculations.marsAge} Martian years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarCalculations.marsExpectancy}. That means you should expect a groovy ${marsAnalysis} more Martian trips around the sun, godspeed cosmic comrade!`);
  let jupiterAnalysis = human.compareAgeAndLifeExpectancies(solarCalculations.jupiterAge, solarCalculations.jupiterExpectancy);
  $('#jupiter-output').text(`You are ${solarCalculations.jupiterAge} Jovian years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarCalculations.jupiterExpectancy}. That means you should expect a groovy ${jupiterAnalysis} more Jovian trips around the sun, godspeed cosmic comrade!`);
});