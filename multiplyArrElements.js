Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases,
the range will be between 1 and 18 and the input will always be an integer.

function FirstFactorial(num) {

  let numBelowNum = [];
  let result = 0;
  let newNum = num
  do {
  numBelowNum.push(newNum - 1) //7,
  newNum = newNum - 1
  }
  while (newNum > 0);
  let accumulatorValue = 1
  for (let i = 0; i < numBelowNum.length - 1 ; i++) {
  accumulatorValue = accumulatorValue * numBelowNum[i]
  }
  let newResult = accumulatorValue * num
  return newResult
  }
  console.log(FirstFactorial(8));
  

