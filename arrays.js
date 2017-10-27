
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  return newArray = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(newElement, inputArray) {
  return inputArray = [newElement, ...inputArray]
}
