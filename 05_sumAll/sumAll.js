const sumAll = function(a, b) {
    if(isNaN(a) || isNaN(b) || typeof a == "string" || typeof b == "string") return 'ERROR';
    if(a < 0 || b < 0) return 'ERROR'
    return (Math.abs(a-b) + 1)*(a + b)/2;
  };

// Do not edit below this line
module.exports = sumAll;
