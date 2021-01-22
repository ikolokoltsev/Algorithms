const numbers = [0, 7, 12, 42, 34, 55, 2, 18, 71, 82, 5, 90, 36]
let iterations = 0

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++){
    iterations ++
    if (array[i] === target) return `number ${target} found in ${iterations} steps`
  }
  return `Number ${target} doesn't exist in array total iterations : ${iterations}`
}

console.log(linearSearch(numbers, 321))
