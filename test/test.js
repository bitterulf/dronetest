var assert = require("assert");
var Tool = require('../tool.js');

describe('Tool', function(){
  describe('simple creation', function(){
    var tool = new Tool('funky');
    it('should return the given name', function(){
      assert.equal(tool.getName(), 'funky');
    })
  })
});
