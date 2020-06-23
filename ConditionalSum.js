const conditionalSum = function(values, condition) {

  let sum = 0 ;

  for(let i = 0 ; i<values.length ; i++) {

  if(condition==="even") {

    values[i] % 2 === 0 ? sum += values[i] : sum = sum;

  } else {

    values[i] % 2 === 0 ? sum += values[i] : sum = sum;

  }

}

return sum;

};


console.log(conditionalSum([1,2,3,4,5,6,7,8,9,10],"even"));
