const { avg } = require('./statisticslib')

const result = avg([5, 4, 6, 7, 3, 8, 2, 3, 1, 5, 4])

// result = 123123; // ERROR: result es inmutable (es no-reasignable)

console.log(`Result: ${result.toFixed(2)} (the avg)`)