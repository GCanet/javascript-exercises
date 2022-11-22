var removeFromArray = function(...args) {
   const array = args[0]
   return array.filter(val => !args.includes(val))
 }

// Do not edit below this line
module.exports = removeFromArray;



//var i = 0;
//while (i < arr.length) {
  //if (arr[i] === value) {
    //arr.splice(i, 1);
//  } else {
//    ++i;
//  }
//}
//return arr;