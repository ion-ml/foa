## Assignment answers

### TODO

- Q 1.b
- Q 2.b
- Q 3
- Q 4.b
- Q 4.c
- Q 4.d
- Q 5 - differences PSO

---

### Q 1.a

> Explain the inspiration, the main features and the expected function of the algorithm in words.

The novel Metaheuristic Optimisation Algorithm described within this assignment has been inspired by a paper by X, which concerned Fruit Fly Optimisation, and which was a development of the first FOA algorithm by PAN.

FOA algorithms model the movement of a swarm of fruit flies towards food. They do so with regard to the interactions between individual fruit flies and the swarm. Individual fruit flies can not see the food. However, they are able to smell the food.

There are two main phases within FOA algorithms. In the first of them, the smell phase, the concentration of the smell of food associated with each fruit fly is calculated. The fruit flies closest to the location of the food should be associated with a greater smell concentrations. In the second phase, the vision phase, the swarm moves towards the fruit fly associated with the greatest smell concentration. After repeated iterations of the these phases the swarm should converge on the food.

The main additional feature proposed by X is the incorporation of randomness within the smell phase. X suggests that this will improve the speed (measured by number of iterations) with which the swarm converges upon the food.  This appears to be a reasonably convincing argument. However, it might the case that exploration is being favoured over exploitation. That is, there may be values for which X’s algorithm is not faster than a standard FOA.

---

### Q 1.b

> If the paper contains several algorithms, then choose only one and justify your choice.

The chosen algorithm used a Chebyshev chaotic map and evaluated the sum of sqaures.
A chaotic map is a periodic, pseudo chaotic distribution. A Chebyshev chaotic map takes the takes
---


### Q 2.a

> Present and explain the main formulas that define the algorithm.


The main formulas used within the FOA algorithm by X are as follows.
The algorithm starts by randomly allocating the food and the fruit flies to positions within the search space. The random allocation of the food has not been defined, explicitly. However, the random allocations of the fruit fly position has been, and it calculates (per coordinate) a pseudo random value within the pre-defined lower and upper bounds (of the search space).

See append 1

Within the smell phase, the concentration of the smell of food associated with each fruit fly is defined by the distance (between the fruit fly and the food) divided by 1. Smell concentration is the inverse of the distance. Smell concentration is greater when the distance is smaller and lower when the distance is larger. 

See append 2

Within the vision phase, the fruit fly with the maximin smell concentration (of food) is calculated by finding the maximising smell concentration value (per fruit fly) from across the swarm.
In order for the swam to move towards the fruit fly with the maximum smell concentration (of food) the distance between that fruit fly and the centre of the swarm is calculated.

The x coordinate of the centre of the swarm is calculated by summing all of the x coordinates of the fruit flies and dividing by the number of fruit flies. The y coordinate of the centre of the swarm if found using the same process.

The distance between the centre of the swarm and the fruit fly associated with the maximin smell concentration of food is found by calculating the Pythagorean distance between the two positions.

See appendix 4.

---

### Q 2.b

> Indicate its main parameters and their ranges

Number of fruit flies = 30
Iterations - 300
Average across 50
Lower bound 0
Upper bound 100

---

### Q. 3

> Discuss the results given in the paper

---

### Q 4.a

> Explain your approach towards the reproduction of the algorithm of the paper:

The approach taken to reproduce the algorithm described by X was primarily motivated by portability. To that end, the code associated with this assignment has been written in JavaScript. This means that it can be run on any web browser. It also means that potential problems that might have arisen due the algorithm have been written in a specific version of a language or on a specific operating system should have been avoided.

---

### Q 4.b

> What simplifications had to be made?

Vector manipulation is underdeveloped in JavaScript. Consequently, one of the key simplification that was made when constructing the code associated with this assignment was to structure the key components within the FOA algorithm into classes. Thus, there are Food, FruitFly and Swarm classes each with their own methods and properties. One of the benefits of this approach is that enabled unit tests to be written for each class, using the Mocha testing library.

See Appendix 5

---

### Q 4.c

> What parameter values had to be inferred?

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
