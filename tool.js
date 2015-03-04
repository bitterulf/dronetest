var Tool = function(name) {
  this.name = name;
};

Tool.prototype.getName = function() {
  return this.name;
};

Tool.prototype.sum = function(a, b) {
  return a + b;
};

module.exports = Tool;
