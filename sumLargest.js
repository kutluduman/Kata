const sumLargestNumbers = data => {

  const arr = data.sort((a,b)=> b - a);

  return arr[0] + arr[1];

};

const array = [65,1,6,5,7,8,9,45];

console.log(sumLargestNumbers(array));




  
