exports.min = function min (array) {
   if (typeof array === 'object' && array.length !== 0) {
     let res = array[0];
     array.forEach(element => {
       if (element < res) {
         res = element;
       }
     });
     return res;
  } else {
     return 0;
}
}
  
exports.max = function max (array) {
  if (typeof array === 'object' && array.length !== 0) {
    let res = array[0];
    array.forEach(element => {
      if (element > res) {
        res = element;
      }
    });
    return res;
  } else {
    return 0;
  }
}
  
exports.avg = function avg (array) {
  if (typeof array === 'object' && array.length !== 0) {
    let res = 0;
    array.forEach(element => {
      res += element;
    });
    return res / array.length;
  } else {
    return 0;
  }
}
