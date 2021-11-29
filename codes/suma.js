function sum(a, b) {
  return a + b
}

const result = sum(Number(process.argv[2] || 0), Number(process.argv[3] || 0))

console.log('Suma es:', result)
