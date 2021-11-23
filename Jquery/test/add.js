const add = require('../add.js');

QUnit.module('add');

QUnit.test('two numbers', assert => {
  assert.equal(add(50, 50), 50);
});