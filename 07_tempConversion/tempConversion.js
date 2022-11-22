const ftoc = function(c) {
  let num = ((c - 32) * 5)/9;
  let n = num.toFixed(1);
return n
};

const ctof = function(f) {
  let num = (f * 1.8) + 32;
  let n = num.toFixed(1);
return n
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
