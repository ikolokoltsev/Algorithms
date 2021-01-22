const numbers = [120, 7, 12, 42, 34, 55, 2, 18, 71, 82, 5, 90, 36, 14, 73, 36, -4, 0, 29, 19, 3, 41, 59]
let iterations = 0

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if (array[j] > array[j +1]){
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
      iterations++
    }
  }
  return array
}

console.log(bubbleSort(numbers), `
Array of ${numbers.length} items was sorted in ${iterations} iterations`)