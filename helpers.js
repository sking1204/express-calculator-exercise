function makeFrequencyCounter(arr){
  const frequencyCounter = {};
  for(let element of arr){
    if (frequencyCounter[element]){
      frequencyCounter[element] +=1;
    }else {
      frequencyCounter[element] =1;
    }
  }
  return frequencyCounter;

}

function findMostFrequent(arr){
  let frequencycount = makeFrequencyCounter(arr);

  let count =0
  let mostFrequent;

  for (let key in frequencycount){
    if(frequencycount[key] > count){
      mostFrequent = key;
      count = frequencycount[key]
    }
  }
  return mostFrequent;
}

function convertAndValidateNumsArray(arrOfnumsAsStrings) {
  let result = [];

  for (let i = 0; i < arrOfnumsAsStrings.length; i++) {
    let valToNumber = Number(arrOfnumsAsStrings[i]);

    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${arrOfnumsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }
  return result;
}

function findMean(nums){
  if(nums.length === 0) return 0;
  return nums.reduce(function (acc, cur) {
    console.log(`acc:${acc} cur:${cur}`)
    return acc + cur;
  }) / nums.length
}


function compareNumbers(a, b) {

  //this sorts the array in ascending order when combined with . sort
  return a - b;
}

function findMedian(arr) {
  // Sort the input array in ascending order using the compareNumbers function
  arr.sort(compareNumbers);
  console.log(arr)

  //find the middle index
  const middleIndex = Math.floor(arr.length / 2);

  //calculate the median value based on the # of elements in array
  let median;

  //for even number of elements, the median is the average of the two middle values
  if (arr.length % 2 === 0) {
    median = (arr[middleIndex] + arr[middleIndex - 1]) / 2;
  } else {

    //for odd number of elements, the median is the middle value (the value of middleIndex)
    median = arr[middleIndex];
  }


  return median;
}

module.exports = {
  makeFrequencyCounter,
  findMostFrequent,
  convertAndValidateNumsArray,
  findMean,
  findMedian,
  compareNumbers};