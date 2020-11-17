# Discover your Age throughout the Solar System!

#### By Cory Nordenbrock
##### 11/16/20


## What does it do?

* This wormhole of a simple web app will delight any user for hours--or perhaps even solar minutes--with dazzling insights into the relative workings of spacetime. 
* Specifically, the user is prompted to enter their age along with bonus life expectancy attributes (the latter being entirely optional, arbitrarily analyzed, and an admittedly silly feature) and upon submitting their input the user is reciprocated with actual calculations of their relative solar age on the first five planets and respective life expectancies using a baseline earth age of 100yrs.

## Installation Options

1. Using bash terminal or preferred CLI, generate a new app directory by cloning git repository with the following command: ``` git clone https://github.com/cordenbrock/galactic-age ```
2. Navigate to galactic-age directory: ``` cd galactic-age ```
3. Open with VScode or preferred IDE: ``` code . ```
4. Install required node modules: ``` npm install ```
5. Launch a live webpack dev-server amenable to personal edits, which will automatically deploy app in default web browser: ``` npm run start ```

    => Alternatively, run the command ``` npm run build ``` to generate a "dist" directory conatining bundled file optimized for employment. Navigate to directory from desktop GUI and double-click index.html file to open in default web browser.

## Why does it do?

* Even though this app is arguably the coolest thing east of pluto, credit for the project idea goes to the wonderful people at Epicodus!
* Additionally, the core idea behind the development of this app was to promote test-driven-development. I encourage you to explore my implementation of the testing framework Jest and associated test specs below!

## Specifications

|  Specs | Behavior | Input | Output |
|---|---|---|---|
| 1 | Accept user input for age/Earth-yrs and life expectancy attributes, store data for calculating various solar ages and life expectancies | age: 30, attr-1: 5, attr-2: 15, attr-3: 25 | age: 30, age: 30, attr-1: 5, attr-2: 15, attr-3: 25 |
| 2 | Calculate user's age in Mercury yrs to the nearest whole number | 30 | 125 |
| 3 | Calculate user's age in Venus yrs to the nearest whole number | 30 | 48 |
| 4 | Calculate user's age in Mars yrs to the nearest whole number | 30 | 16 |
| 5 | Calculate user's age in Jupiter yrs to the nearest whole number | 30 | 3 |
| 6 | Calculate Earth life expectancy based on user attributes | age: 30, attr-1: 5, attr-2: 15, attr-3: 25 | Earth life-expectancy: 105 |
| 7 | Calculate life expectancy on other planets based on Earth life expectancy to the nearest whole number | Earth life-expectancy: 105 | Mercury life-expectancy: 438, Venus life-expectancy: 169, Mars life-expectancy: 56, Jupiter life-expectancy: 9  |
| 8 |  Calculate how many solar life years that user either has remaining or has surpassed in expectancy on respective planet | age:30, earth adjusted-life-expectancy: 105 | Earth life-left: 105-30, Mercury life-left: 438-125, Venus life-left: 169-48, Mars life-left: 56-16, Jupiter life-left: 9-3  |

## Built with

* _HTML_
* _CSS_
* _Bootstrap 4_
* _javaScript_
* _jQuery_
* _Webpack_
* _Jest_

### Known Bugs

* No known bugs at this time

### Suggested contributiions

* Add calculations/functionality for more planets, celestial objects, etc.
* Improve UI

### Legal

MIT License, (c) 2020 Cory Nordenbrock