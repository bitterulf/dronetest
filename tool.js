var Tool = function(name) {
  this.name = name;
};

Tool.prototype.getName = function() {
  return this.name;
};

module.exports = Tool;
