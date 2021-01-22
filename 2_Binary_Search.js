const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let iterations = 0

function binarySearch(array, target) {
  let start = 0
  let end = array.length
  let middle

  
  while (start <= end ) {
    middle = Math.floor((start + end) / 2)
    iterations++
    if (array[middle] === target) {
      return `Element ${target} on index ${middle}, found in ${iterations} iterations`
    }
    (target < array[middle]) ? end = middle - 1 : start = middle + 1
  }
  return `Nothing found, item ${target} not in the list, total iterations ${iterations}`
}


function recursiveBinarySearch(array, target, start, end) {
  let middle = Math.floor((start + end) / 2)
  iterations++
  if (array[middle] === target) {
    return `Element ${target} on index ${middle}, found in ${iterations} iterations`
  }
  
  return (target < array[middle]) ?  recursiveBinarySearch(array, target, 0, middle -1):  recursiveBinarySearch(array, target, middle + 1, end);
}

// console.log(recursiveBinarySearch(numbers, 5, 0, numbers.length))
console.log(binarySearch(numbers, 55))