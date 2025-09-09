### Question 1:  What is the difference between var, let, and const?
Ans:
**var**: It declares variables with function or global scope and allows re-declaration and updates within the same scope.
**let**: It declares variables with block scope, allowing updates but not re-declaration within the same block.
**const**: It declares block-scoped variables that cannot be reassigned after their initial assignment.

### Question 2: What is the difference between map(), forEach(), and filter()?
Ans: 
**map()**:It creates a new array by applying a function to each element and returns the new transformed array.
**forEach**:It use to loop through each element in an array and does not return a new array
**filter**:It creates a new array with elements that pass a condition and returns only those items that satisfy the callback function
### Question 3: What are arrow functions in ES6?
Ans:
An arrow function is a shorter syntax for writing functions in JavaScript. Introduced in ES6, arrow functions allow for a more concise and readable code, especially in cases of small functions.

The arrow functions have-
**1.shorter syntax**
#### For Example ####
```bash
const square = x => x * x; 
```
**2.Implicit return**-If the function body has only one expression, return is implicit.
```bash
const greet = name => `Hello, ${name}!`;
console.log(greet("Maisha"))"
```
**No arguments object**Arrow functions don’t have their own arguments object but one must use rest parameters (...args) instead.
```bash
const showArgs = (...args) => console.log(args);
showArgs(1, 2, 3)
```


### Question 4:  How does destructuring assignment work in ES6??
Ans: You can extract array elements into variables.

#### For Example ####
```bash
const numbers = [10, 20, 30];
const [x, y, z] = numbers;

console.log(x, y, z); // output: 10 20 30

```
You can extract object properties into variables

#### For Example ####
```bash
const student = { name: "Tasnim", ID: 15 }

const { name, ID } = student;

console.log(name, ID); // Tasnim 15

```


### Question 5: Explain template literals in ES6. How are they different from string concatenation?

Ans: Template literals are strings enclosed in backticks (`) instead of single (') or double (") quotes.It inserts variables directly inside the string using ${ }.

Before ES6, if you wanted to build a string with variables, you had to use the + operator. This often became messy and hard to read when dealing with multiple variables or long text.

#### For Example ####
```bash
"My name is " + name + " and I am " + age + " years old."

```

With template literals, you can embed variables and expressions directly inside the string.This is more readable, easier to maintain, and less error-prone.

#### For Example ####
```bash
`My name is ${name} and I am ${age} years old.`

```
