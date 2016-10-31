// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz++;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
var i = 0;
while(i < 3) {
  checkz -= 2;
  i++;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
//declare and initialize array with numbers 1 thru 7
var total = 0;
// declare and initialize variable 'total' to 0
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
//each value in the array is added to 'total' consecuitively

console.log(total);

//the resulting total is displayed on the console
