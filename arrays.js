
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(newElement, inputArray) {
  return newArray = [newElement, ...inputArray]
}

function destructivelyAddElementToBeginningOfArray(newElement, inputArray) {
  return inputArray = [newElement, ...inputArray]
}
