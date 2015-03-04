(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Tool = require('./tool.js');

if ('mooo' == 1) {
  console.log('oooo')
}
},{"./tool.js":2}],2:[function(require,module,exports){
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
  if (!isNumber(a) || !isNumber(b))  {
    throw new Error("only works with numbers");
  }
  return a + b;
};

module.exports = Tool;

},{}]},{},[1]);
