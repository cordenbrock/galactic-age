import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Human from './js/human.js';
import { CalcSolarAges, CalcSolarLifeExpectancies } from '../src/js/calculator';

$('#form').on("submit", function(e) {
  e.preventDefault();
  let ageInput, attrOneInput, attrTwoInput, attrThreeInput;
  ageInput = parseInt($('#age').val());
  attrOneInput = parseInt($('#bozos').val());
  attrTwoInput = parseInt($('#tusks').val());
  attrThreeInput = parseInt($('#sagan').val());

  let human, solarAges, solarLifeExpectancies;
  human = new Human(ageInput, attrOneInput, attrTwoInput, attrThreeInput);
  human.calcAdjustedLifeExpectancy();
  solarAges = new CalcSolarAges(human.age);
  solarLifeExpectancies = new CalcSolarLifeExpectancies(human.adjustedLifeExpectancy);
  
  let mercuryAnalysis = human.compareAgeAndLifeExpectencies(solarAges.mercuryAge, solarLifeExpectancies.mercuryExpectancy);
  $('#mercury-output').text(`You are ${solarAges.mercuryAge} Mercurian years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarLifeExpectancies.mercuryExpectancy}. That means you should expect a groovy ${mercuryAnalysis} more Mercurian trips around the sun, godspeed comrade!`);
  let venusAnalysis = human.compareAgeAndLifeExpectencies(solarAges.venusAge, solarLifeExpectancies.venusExpectancy);
  $('#venus-output').text(`You are ${solarAges.venusAge} Venusian years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarLifeExpectancies.venusExpectancy}. That means you should expect a groovy ${venusAnalysis} more Venusian trips around the sun, godspeed comrade!`);
  let earthAnalysis = human.compareAgeAndLifeExpectencies(solarAges.earthAge, solarLifeExpectancies.earthExpectancy);
  $('#earth-output').text(`You are ${solarAges.earthAge} Earth years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarLifeExpectancies.earthExpectancy}. That means you should expect a groovy ${earthAnalysis} more Earthly trips around the sun, godspeed comrade!`);
  let marsAnalysis = human.compareAgeAndLifeExpectencies(solarAges.marsAge, solarLifeExpectancies.marsExpectancy);
  $('#mars-output').text(`You are ${solarAges.marsAge} Martian years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarLifeExpectancies.marsExpectancy}. That means you should expect a groovy ${marsAnalysis} more Martian trips around the sun, godspeed comrade!`);
  let jupiterAnalysis = human.compareAgeAndLifeExpectencies(solarAges.jupiterAge, solarLifeExpectancies.jupiterExpectancy);
  $('#jupiter-output').text(`You are ${solarAges.jupiterAge} Jovian years young, friend. Due to your efforts, or lack thereof, in appeasing the interstellar overlords, you can expect to live up to ${solarLifeExpectancies.jupiterExpectancy}. That means you should expect a groovy ${jupiterAnalysis} more Jovian trips around the sun, godspeed comrade!`);
});