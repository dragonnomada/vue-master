const calc = require('./lib/calc')

console.log(calc.sum(100, 200))

calc.sumAsync(100, 4000).catch(error => console.log(error))

const { avg } = require('./lib/stat')

console.log(avg([1, 2, 3, 4, 5, 6]))

calc.hello()