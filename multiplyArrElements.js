// console.log(Math.floor(1.5))
// console.log(Math.floor(2.3))
// // console.log(Math.ciel(1.5))
// // console.log(Math.ciel(2.3))
// console.log(Math.random())
// console.log(Math.random())

// console.log(Math.sign(3))
// console.log(Math.sign(-3))

// console.log(Math.max(1,2,3,66))
// console.log(Math.min(1, 4, -3))
// console.log(Math.pow(4, 2))

// let array = [1,2,3]
// for (var value of array) {     
//   // console.log(value)
// }

// console.log(array.shift())
// // console.log(array.shift())
// console.log(array)

//Challenge 11
// var a = [1,2,3];
// var b = a;
// console.log("array a is equal to array b?", a == b) // what will this return?
// var c = [1,2,3]
// console.log("array a is equal to array c?", a == c) // what will this return?
// //does this return false because it is being saved to a different place in memory?

// var d = a.slice();
// console.log("array a is equal to array d?", a == d) // what will this return?

// var sliceMe = ["first","half", "second", "half"];
// var firstHalf =  sliceMe.slice(0, 2)
// var secondHalf = sliceMe.slice(2,4)
// console.log(firstHalf)
// console.log(secondHalf)
// console.log(sliceMe)
// //splice DOES mutate the array unlike slice.
// splice: (start after breakeup, remove absolutely all memory of their ex, input love , input performance, input consciousness)
// //splice returns an array OF THE REMOVED ELEMENTS 
// //12

// var arrA = [0,1,"remove me!", 2, 3]
// arrA.splice(2,1); 
// console.log(arrA); //0,1,2,3
// arrA.splice(1,1,"one"); //0, "one", "2, 3"
// console.log(arrA);

// var numCount = [0, 1, "two", "three", 4];
// var wordCount = ["zero", "one", 2, 3, "four"];

// numCount.splice(2, 2, 2, 3)
// // console.log(numCount)
// wordCount.splice(2, 2)
// // wordCount.splice(4, 1, 4)
// console.log(wordCount)

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
  
 
 
 
 
    
 // keep this function call here 
