const repeatString = function(string, num) {
    var frase = "";

    while (num > 0) {
        frase += string;
        num--;
      }
    if (num < 0) {
        return "ERROR"
    }
    return frase;
}


// Do not edit below this line
module.exports = repeatString;