var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if the output of 5! is equal to 120', () =>{
      //setup
      const input = 5;
      const expected = 120;
      //exercise 
      const result = Calculate.factorial(input)
      //verify
      assert.strictEqual(result, expected)
    })
    it('test if my factorial method returns 6 when passed 3', ()=>{
      //setup
      const input = 3;
      const expected = 6
      //exercise 
      const result = Calculate.factorial(input)
      //verfify
      assert.strictEqual(result, expected)
    })
    it('returns 1 when you pass in 0.', () =>{
      //setup
      const input = 0;
      const expected = 1;
      //exercise 
      const result = Calculate.factorial(input)
      //verify
      assert.strictEqual(result, expected)
    })

  });
});