const numbers = [120, 7, 12, 42, 34, 55, 2, 18, 71, 82, 5, 90, 36, 14, 73, 36, -4, 0, 29, 19, 3, 41, 59]
let iterations = 0

function selectionSort(array) {
  
  for (let i = 0; i < array.length; i++){
    let minIndex = i
    for (let j = i+1; j < array.length; j++){
      (array[j] < array[minIndex]) ? minIndex = j : minIndex
      iterations ++
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}

console.log(selectionSort(numbers), `
Array of ${numbers.length} items was sorted in ${iterations} iterations`)
