var myName = "Syhan"
var numbers = [47, 22, 48, 22, 13, 85, 33, 19, 24, 36];

var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0];

console.log('Smallest: ' + smallest);
console.log(myName);