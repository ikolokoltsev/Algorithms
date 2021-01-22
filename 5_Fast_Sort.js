const numbers = [120, 7, 12, 42, 34, 55, 2, 18, 71, 82, 5, 90, 36, 14, 73, 36, -4, 0, 29, 19, 3, 41, 59]
let iterations = 0

function fastSort (array) {
  if (array.length <= 1) {
    return array
  }
  let pivot = array[Math.floor(array.length / 2)]
  let less = []
  let greater = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === pivot) {
      continue
    }
    (array[i] < pivot) ? less.push(array[i]) : greater.push(array[i])
    iterations++
  }
  return [...fastSort(less), pivot, ...fastSort(greater)]
}


console.log(fastSort(numbers), `
Array of ${numbers.length} items was sorted in ${iterations} iterations`)
