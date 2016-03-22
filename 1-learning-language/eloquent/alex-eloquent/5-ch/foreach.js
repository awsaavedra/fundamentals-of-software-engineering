function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
      action(array[i]);
      }

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum);
