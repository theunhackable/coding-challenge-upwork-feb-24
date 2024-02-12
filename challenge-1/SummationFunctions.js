// Simple Summation Function: 
// Write a function that takes an integer n and
// returns the sum of all integers from 1 to n using a loop.

/*
 Time Complexity: O(n)
 Space Complexity: O(1)

 This solution is very in efficent as we are using a loop
 which takes linear time complexity.

*/
function simpleSummation(n) {
  let sum = 0;
  for (let i = 1; i <= n; ++i) {
    sum += i;
  }
  return sum;
}


// Recursive Summation Function:
//  Write a recursive function to perform the same task.

/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Using recursion is a bad idea as it can lead to Stack Overflow.
*/

function recursiveSummation(n) {
  if (n === 1) return 1;
  return n + recursiveSummation(n - 1);
}

// Mathematical Formula Implementation: Implement a function that uses the formula for the sum of an arithmetic series to find the sum of all integers from 1 to n.
/*
The famous sum of first n integers can be deduced like this.

Assume for sum of first 100 integers = 1 + 2 + 3 + ... + 98 + 99 + 100
we can make this as (1 + 100) + (2 + 99) ...
which will become 101 + 101 .... for 50 times = 101 * 50
which can be written as (100 + 1) * 50 = (n + 1) * n / 2

Time Complexity: O(1)
Space Complexity: O(1)

We can deduce that this is the best solution as it solves the problem in relatively less time
compared to the alternative methods
*/
function formulaSummation(n) {
  return ((n + 1) * n) / 2;
}

