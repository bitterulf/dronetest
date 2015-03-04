var isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var Tool = function(name) {
  this.name = name;
};

Tool.prototype.getName = function() {
  return this.name;
};

Tool.prototype.sum = function(a, b) {
  if (!isNumber(a) || !isNumber(b)) throw new Error("only works with numbers");
  return a + b;
};


module.exports = Tool;
