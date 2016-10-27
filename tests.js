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