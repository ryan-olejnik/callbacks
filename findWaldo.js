// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function (element, index) {if (element == 'Waldo') {found(index)}})
}

function actionWhenFound(indexOfWaldo) {
  console.log('Found Waldo at index: ', indexOfWaldo);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

