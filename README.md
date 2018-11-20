# FOA

> A Chaotic Fruit Fly Optimisation Algorithm in JavaScript based upon work by Mitic, Vukovic, Petrovic and Miljkoiv (2015).

---

## Contents

- View output
- Directory structure
- Install for development
- Run unit tests

---

## View output

- Load `./dist/index.html` into a browser.

In order to load the algorithm, open `dist/index.html` within a browser. The resulting page will display a form with fields representing the algorithm's parameters. The fields have default values for the Chebyshev chaotic map / Sum Squares combination. Modify the values as required. Then click the `run` button and the results should be printed at the bottom of the page.

---

## Directory structure

- **charts** *the charts used within the report*
- **data**  
- **dist** *transpiled ES5 JavaScript code*
- **scripts** *Python code used to generate the charts*
- **src** *non-transpiled ES6 JavaScript code*
- **test** *Mocha* based unit tests

---

## Install for development

```
// CD into the root directory of the codebase
cd ./

// Run npm i to load the dependencies
npm i
```

---

## Run unit tests

```
// CD into the root directory of the codebase
cd ./

// Once the npm based dependencies have been installed,
// run the unit tests via the following command

npm run test
```
---
