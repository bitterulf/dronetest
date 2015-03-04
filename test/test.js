var assert = require("assert");
var Tool = require('../tool.js');

describe('Tool', function(){
  describe('simple creation', function(){
    var tool = new Tool('funky');
    it('should return the given name', function(){
      assert.equal(tool.getName(), 'funky');
    })
    it('should sum 1 and 2 to 3', function(){
      assert.equal(tool.sum(1, 2), 3);
    })
    it('should only accept numbers!', function(){
      assert.throws(
        function() {
          tool.sum(1, '2')
        },
        new Error("only works with numbers")
      );
    })
  })
});
