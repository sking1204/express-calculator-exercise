const express = require('express');
const ExpressError = require('./expressError')
const { makeFrequencyCounter,findMostFrequent,convertAndValidateNumsArray,findMean, findMedian } = require('./helpers');

const app = express();       
   
 
//need to work on adding try and catch for errors in routes!!!

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('Query must begin with "nums" followed by a comma separated list of numbers.', 400)
    }
    let reqresponse=req.query.nums;
    console.log(reqresponse)
    let numsAsStrings = req.query.nums.split(',');
    console.log(numsAsStrings);
    // // check if anything other than a number was included in nums query string
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
  
    let result = {
      operation: "mean",
      result: findMean(nums)
    }
  
    return res.send(result);
  });

  app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    // check if anything other than a number was included in nums query string
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
    let result = {
      operation: "median",
      result: findMedian(nums)
    }
  
    return res.send(result);
    
  });
  
  app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    // check if anything other than a number was included in nums query string
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
    let result = {
      operation: "mode",
      result: findMostFrequent(nums)
    }
  
    return res.send(result);
  
   
  });






  

  
  /** general error handler */
  
  app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
  
    // pass the error to the next piece of middleware
    return next(err);
  });
  
  /** general error handler */
  
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });
  

app.listen(3000, function(){
    console.log("Server running on port 3000")
})


//or we can use arrow functions to shorten our code.

// app.listen(3000, () => {
//     console.log("Server running on port 3000")
//   });

