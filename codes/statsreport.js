const { size, sum, avg } = require('./statisticslib')

const products = [
    {
        id: 1,
        name: "Coca Cola",
        price: 17.5
    },
    {
        id: 2,
        name: "Galletas Marías",
        price: 14.99
    },
    {
        id: 3,
        name: "Gansito",
        price: 10.23
    },
]

console.log(`Total: ${size(products)}`)
console.log(`Price Sum: $ ${sum(products.map(producto => producto.price))}`)
console.log(`Price Avg: $ ${avg(products.map(producto => producto.price))}`)