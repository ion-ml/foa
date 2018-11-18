## Assignment answers

### TODO

- Q 3
- Q 4.b
- Q 4.c
- Q 4.d
- Q 5 - differences PSO

---

### Q 1.a

> Explain the inspiration, the main features and the expected function of the algorithm in words.

The novel meta-heuristic optimisation Algorithm described within this assignment has been inspired by work by Mitic, Vukovic, Petrovic and Miljkoiv (2015), which concerned a Fruit Fly Optimisation algorithm.

FOA algorithms model the movement of a swarm of fruit flies towards food. They do so with regard to the interactions between individual fruit flies and the swarm. Individual fruit flies can not see the food. However, they are able to smell the food.

There are two main phases within FOA algorithms. In the first of them, the smell phase, the concentration of the smell of food associated with each fruit fly is calculated. The fruit flies closest to the location of the food should be associated with a greater smell concentrations. In the second phase, the vision phase, the swarm moves towards the fruit fly associated with the greatest smell concentration. After repeated iterations of the these phases the swarm should converge on the food.

The main additional feature proposed by Mitic, Vukovic, Petrovic and Miljkoiv (2015) is the incorporation of randomness within the smell phase. X suggests that this will improve the speed (measured by number of iterations) with which the swarm converges upon the food. This appears to be a reasonably convincing argument. However, it might be the case that exploration is being favoured over exploitation. That is, there may be values for which X’s algorithm is not faster than a standard FOA.

---

### Q 1.b

> If the paper contains several algorithms, then choose only one and justify your choice.

The chosen algorithm used a Chebyshev chaotic map. Chaotic maps are functions that exhibit chaotic behaviour. more specifically, a Chebyshev chaotic map takes the cosine of the inverse cosine of a value. This produces results between -1 and 1. The Chebyshev chaotic map was found to be the most successful map used by X, which was why it was chosen to be reproduced within this assignment.

In addition, the algorithm used by X evaluated serval functions. One of the most successful was Sum of Squares, which has been used within this assignment.

---


### Q 2.a

> Present and explain the main formulas that define the algorithm.

The main formulas used within the FOA algorithm by X are as follows.

The algorithm starts by randomly allocating the food and the fruit flies to positions within the search space. The random allocation of the food has not been defined, explicitly. However, the random allocations of the fruit fly position was defined. The definition calculates a pseudo random value based upon the pre-defined lower and upper bounds (of the search space).

`fruitFly = lowerBound + (upperBound - lowerBound  * rand())`

Within the smell phase, fruit flies are pseudo randomly re-positioned with regard to their previous best position. This is defined using the following formula:

`fruitFly (nextPosition) = fruitFly (currentPosition) + alpha(currentPosition - bestPosition)`

Within the vision phase, the smell concentration per fruit fly is defined by the inverse of the distance between the fruit fly and the food. Smell concentration increases as the distance between a given fruit fly and the food decreases. Conversely, smell concentration decreases as the distance between a given fruit fly and the food increases. 

Per iteration, the swarm moves toward the fruit fly with the maximum smell concentration. This process is defined by the following formula:

`xBest = min (smellConcentration per fruit fly)`

---

### Q 2.b

The parameters used by Mitic, Vukovic, Petrovic and Miljkoiv (2015) for the Chebyshev chaotic map / Sum Squares combination are as follows:

- Number of fruit flies = 30
- Number of trials = 50
- Iterations per trial = 700
- Search space lower bound = -10
- Search space upper bound = 10

---

### Q. 3

> Discuss the results given in the paper

---

### Q 4.a

> Explain your approach towards the reproduction of the algorithm of the paper:

The approach taken to reproduce the algorithm described by Mitic, Vukovic, Petrovic and Miljkoiv (2015) was primarily motivated by portability. Consequently, the code associated with this assignment has been written in JavaScript. This means that it can be run within any web browser. Thus, potential problems that might have arisen had the algorithm have been written in a specific version of a language / specific operating system should have been avoided.

In order to load the algorithm into a browser navigate to `dist/index.html`, which displays a form containing fields representing the algorithm's parameters. The fields have default values for the Chebyshev chaotic map / Sum Squares combination. Modify the parameters as appropriate. Then click the `run` button beneath the form. The results should then be printed at the bottom of the page.

The JavaScript code contains a separate module for each of the algorithm's key components.
- The `src/food.js` class defines the coordinates of the food.
- The `src/fruitFly.js` class defines the coordinates and all of the processes that can be applied to a fruit fly.
  - This class also retains the coordinates of the best position per fruit fly.
- The `src/fruitFlies.js` aggregates the fruit flies and handles communication between them and the swarm.
- The `src/swarm.js` class represents the swarm.
- `src/alpha.js` contains functions handling the Chebyshev chaotic map.
- Finally, `src/foa.js` contains functions representing the algorithm's phases, such as `smell` and `vision`.

In addition, `src/print.js` contains a function that prints the algorithm's results onto the loaded web page in `.csv` format, enabling the data to be easily copied into other statistical / charting software.

Further information about how to load the algorithm, along with the build and testing process for the code modules described above, can be found within the `README.md` file at the root of the code-base.

---

### Q 4.b

> What simplifications had to be made?


The other key simplification

movement of swarm
find smell concentration per fruit fly
Automatically updated after each change of coordinates (see )
best position (with regard to the function being optimised)

calculate delta between best position and Swarm
apply that delta to each fruit fly.

The latter step wasn't explicity defined by Mitic, Vukovic, Petrovic and Miljkoiv (2015)

---

Initial position of the food
Used the same algorithm as per the fruit flies

`fruitFly = lowerBound + (upperBound - lowerBound  * rand())`

However, NUM FOOD - ISSUE

---

### Q 4.c

> What parameter values had to be inferred?

Chaotic map
- values between -1 and 1
- JavaScript coordinates
- Separate calls for x and y
- See the smell function
- subsequent limit
- Addition of a cleaning step - values greater than 1 divided by the upper bound.

---

### Q 4.d

> What benchmark functions are you going to use and why?

---

### Q5.

> Choose one of the standard metaheuristic optimisation algorithms (such as SA,
ES, GA, PSO, or ACO) that is similar (but obviously not identical) to your algorithm.
Explain similarities and differences between your assigned algorithm and the standard algorithm that you have chosen.

Particle Swarm Optimisation is a metaheuristic optomisation algorithm that has similarities to the Fruit Fly Optimisation algorithm associated with this assignment. Both are p-series or population based algorithms, meaning that the result is an emergent property of a movement within and forms of communication between populations of particles or fruit flies. On the other hand, they differ in a number of important aspects.

Differences between PSO and FOA

---

### Q6.

> Present the results of your implementation of the algorithm, compare the results with corresponding results from the standard algorithm.

Overview of results

The novel version of the Fruit Fly Optimisation algorithm was run a single trial, which consisted of 300 iterations, with a search space lower bound of 0 and an upper bound of 100.

The dependent variable is … best position per iteration
Distance
Normalised

Results

Initial period of exploration and then stagnation. No convergence

The standard produced multiple oscillations -

CHART 1

Further investigated by examining the distance between the centre of the swarm and the fruit fly associated with the greatest concentration of smell.
Diverged - middle of the trial
Converged - 0
Fruit flies - converged

This metric was not reported by the standard algorithm.

CHART 2

Question 6.b Consider also scaling of the algorithms with respect to problem complexity


---

### Q7a.i

> Discuss here question such as: Did your algorithms perform as expected? If not, why not? If yes, why did the algorithms perform as it did?

---

### Q7.a.ii

> Why did the algorithms perform as it did?

---

### Q7.b

> What could have been improved if there was one more week (or one more year) to work on the problem?

There are a number of improvements that could have been made if there had been additional time to work on the problem. With regard to the interpretation of the results produced from the JavaScript algorithm, being able to directly visualise them (perhaps using a graphics library such as D3) would have been beneficial. 
In addition, the code was written using the ES6 version of JavaScript, because that iteration of the language contains a number of useful features, such as array maps and class definitions not present in earlier versions. Unfortunately, not all browsers currently support ES6. Thus, a build step was introduced to transpire the ES6 code into ES5. In retrospect, it might have been simpler to have avoided this addition build step.

Another improvement that could be made if there was additional time would be to use Common JS module definitions, rather than ES6 module definitions.  Such definitions provide a means of separate JavaScript scripts importing and exporting information between one another. However, the base ES6 definitions do not run directly on command line JavaScript environment such as Node. Being able to do so would make test an using the algorithm easier, than otherwise. 
With regard to the speed of running the JavaScript based algorithm within a browser, the code could be cross-compiled into Low Level JavaScript or Web Assembly, both of which claim to provide near C speeds of code interpretation. Doing so would be another means of making the algorithm easier than otherwise to use.

---


### Q7.c

> How general are the results?  

---


### Q7.d

> How (or how not) to interpret the results
