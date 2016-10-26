const { test } = QUnit;

test('Testing the test suit', function(assert) {
   assert.ok(true,'test suit works');
});

test('Testing the functions of the main.js file', function(assert) {
   assert.ok(bar(),'function is gotten and returns true');
});