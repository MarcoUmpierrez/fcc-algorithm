const { test } = QUnit;

test('Testing the test suit', function(assert) {
   assert.ok(true,'test suit works');
});

test('Testing the functions of the main.js file', function(assert) {
   assert.ok(bar(),'function is gotten and returns true');
});

test('Reverse a String', function(assert) {
   assert.equal(typeof reverseString('hello'), 'string', 'reverseString("hello") should return a string');
   assert.equal(reverseString('hello'), 'olleh', 'reverseString("hello") should become "olleh"');
   assert.equal(reverseString('Greetings from Earth'), 'htraE morf sgniteerG', 'reverseString("Greetings from Earth") should return "htraE morf sgniteerG"');
});

test('Factorialize a Number', function(assert) {
   assert.equal(typeof factorialize(5), 'number', 'factorialize(5) should return a number');
   assert.equal(factorialize(5), 120, 'factorialize(5) should return 120');
   assert.equal(factorialize(10), 3628800, 'factorialize(10) should return 3628800');
   assert.equal(factorialize(20), 2432902008176640000, 'factorialize(20) should return 2432902008176640000');
   assert.equal(factorialize(0), 1, 'factorialize(0) should return 1');
});