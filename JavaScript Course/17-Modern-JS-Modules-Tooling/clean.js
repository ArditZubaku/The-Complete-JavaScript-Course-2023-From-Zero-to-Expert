'strict mode';

// Freezes only the first level of the object, meaning we can still change the nested ones
// There are 3rd-party libraries that can help perform deep freeze
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// This works because in this case we are editing an object inside the object (an array is also an object in JS)
budget[0].value = 1000000;

// This one doesn't work bc of the first level freeze, bc in this case we are trying to edit the object itself
budget[10] = 10;

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Making an object immutable:
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200;
console.log(spendingLimits);

// Pure function, meaning it doesn't produce side effects.
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 100000000, 'Pizza 🍕');
console.log(newBudget1);

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
console.log(newBudget2);

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

// Pure function, doesn't mutate the passed data, creates a new copy (map returns a new array )
const checkExpenses = (state, limits) =>
  state.map(element =>
    element.value < -getLimit(limits, element.user)
      ? { ...element, flag: 'limit' }
      : state
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);

console.log(finalBudget);

// Impure bc of the console.log
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(element => element.value <= -bigLimit)
    .map(emoji => emoji.description.slice(-2))
    .join('/')
    .slice(-1);

  console.log(bigExpenses);
};

console.log(budget);
logBigExpenses(finalBudget, 1000);
