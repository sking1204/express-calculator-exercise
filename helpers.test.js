const {
  findMean,
  findMedian,
  findMostFrequent,
} = require("./helpers");

describe("#findMedian", function(){
  it("finds the median of an even set", function(){ 
    expect(findMedian([3,22,5,7,6])).toEqual(6)
  })
  it("finds the median of an odd set", function () { 
    expect(findMedian([-1, 90,3 ])).toEqual(3)
  })
})

describe("#findMean", function () {
  it("finds the mean of an empty array", function () { 
    expect(findMean([])).toEqual(0)
  })
  it("finds the mean of an array of numbers", function () { 
    expect(findMean([2,5,88,7])).toEqual(25.5)
  })
})

describe("#findMode", function () {
  it("finds the mode", function () { 
    expect(findMostFrequent([1,2,5,6,7,7,7,9,7])).toEqual('7')
  })
  
})