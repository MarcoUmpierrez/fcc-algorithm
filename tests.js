const { test } = QUnit;

test('Testing the test suit', function (assert) {
  assert.ok(true, 'test suit works');
});

test('Testing the functions of the main.js file', function (assert) {
  assert.ok(bar(), 'function is gotten and returns true');
});

test('Reverse a String', function (assert) {
  assert.equal(typeof reverseString('hello'), 'string', 'reverseString("hello") should return a string');
  assert.equal(reverseString('hello'), 'olleh', 'reverseString("hello") should become "olleh"');
  assert.equal(reverseString('Greetings from Earth'), 'htraE morf sgniteerG', 'reverseString("Greetings from Earth") should return "htraE morf sgniteerG"');
});

test('Factorialize a Number', function (assert) {
  assert.equal(typeof factorialize(5), 'number', 'factorialize(5) should return a number');
  assert.equal(factorialize(5), 120, 'factorialize(5) should return 120');
  assert.equal(factorialize(10), 3628800, 'factorialize(10) should return 3628800');
  assert.equal(factorialize(20), 2432902008176640000, 'factorialize(20) should return 2432902008176640000');
  assert.equal(factorialize(0), 1, 'factorialize(0) should return 1');
});

test('Check for Palindromes', function (assert) {
  assert.equal(typeof palindrome("eye"), 'boolean', 'palindrome("eye") should return a boolean');
  assert.ok(palindrome("eye"), 'palindrome("eye") should return true');
  assert.ok(palindrome("_eye"), 'palindrome("_eye") should return true');
  assert.ok(palindrome("race car"), 'palindrome("race car") should return true');
  assert.notOk(palindrome("not a palindrome"), 'palindrome("not a palindrome") should return false');
  assert.ok(palindrome("A man, a plan, a canal. Panama"), 'palindrome("A man, a plan, a canal. Panama") should return true');
  assert.ok(palindrome("never odd or even"), 'palindrome("never odd or even") should return true');
  assert.notOk(palindrome("nope"), 'palindrome("nope") should return false');
  assert.notOk(palindrome("almostomla"), 'palindrome("almostomla") should return false');
  assert.ok(palindrome("My age is 0, 0 si ega ym."), 'palindrome("My age is 0, 0 si ega ym.") should return true');
  assert.notOk(palindrome("1 eye for of 1 eye."), 'palindrome("1 eye for of 1 eye.") should return false');
  assert.ok(palindrome("0_0 (: /-\ :) 0-0"), 'palindrome("0_0 (: /-\ :) 0-0") should return true');
  assert.notOk(palindrome("five|\_/|four"), 'palindrome("five|\_/|four") should return false');
});

test('Find the Longest Word in a String', function (assert) {
  assert.equal(typeof findLongestWord("The quick brown fox jumped over the lazy dog"), 'number', 'findLongestWord("The quick brown fox jumped over the lazy dog") should return a number');
  assert.equal(findLongestWord("The quick brown fox jumped over the lazy dog"), 6, 'findLongestWord("The quick brown fox jumped over the lazy dog") should return 6');
  assert.equal(findLongestWord("May the force be with you"), 5, 'findLongestWord("May the force be with you") should return 5');
  assert.equal(findLongestWord("Google do a barrel roll"), 6, 'findLongestWord("Google do a barrel roll") should return 6');
  assert.equal(findLongestWord("What is the average airspeed velocity of an unladen swallow"), 8, 'findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8');
  assert.equal(findLongestWord("What if we try a super-long word such as otorhinolaryngology"), 19, 'findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19');
});

test('Title Case a Sentence', function (assert) {
  assert.equal(typeof titleCase("I'm a little tea pot"), 'string', 'titleCase("I\'m a little tea pot") should return a string');
  assert.equal(titleCase("I\'m a little tea pot"), "I'm A Little Tea Pot", 'titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot"');
  assert.equal(titleCase("sHoRt AnD sToUt"), "Short And Stout", 'titleCase("sHoRt AnD sToUt") should return "Short And Stout"');
  assert.equal(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"), "Here Is My Handle Here Is My Spout", 'titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout"');
});

test('Return Largest Numbers in Arrays', function (assert) {
  assert.ok(Array.isArray(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])), 'largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array');
  assert.deepEqual(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27, 5, 39, 1001], 'largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001]');
  assert.deepEqual(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9, 35, 97, 1000000], 'largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]');
});

test('Confirm the Ending', function (assert) {
  assert.ok(confirmEnding("Bastian", "n"), 'confirmEnding("Bastian", "n") should return true');
  assert.notOk(confirmEnding("Connor", "n"), 'confirmEnding("Connor", "n") should return false');
  assert.notOk(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"), 'confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false');
  assert.ok(confirmEnding("He has to give me a new name", "name"), 'confirmEnding("He has to give me a new name", "name") should return true');
  assert.ok(confirmEnding("Open sesame", "same"), 'confirmEnding("Open sesame", "same") should return true');
  assert.notOk(confirmEnding("Open sesame", "pen"), 'confirmEnding("Open sesame", "pen") should return false');
  assert.notOk(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"), 'confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false');
});

test('Repeat a string repeat a string', function (assert) {
  assert.equal(repeatStringNumTimes("*", 3), "***", 'repeatStringNumTimes("*", 3) should return "***"');
  assert.equal(repeatStringNumTimes("abc", 3), "abcabcabc", 'repeatStringNumTimes("abc", 3) should return "abcabcabc"');
  assert.equal(repeatStringNumTimes("abc", 4), "abcabcabcabc", 'repeatStringNumTimes("abc", 4) should return "abcabcabcabc"');
  assert.equal(repeatStringNumTimes("abc", 1), "abc", 'repeatStringNumTimes("abc", 1) should return "abc"');
  assert.equal(repeatStringNumTimes("*", 8), "********", 'repeatStringNumTimes("*", 8) should return "********"');
  assert.equal(repeatStringNumTimes("abc", -2), "", 'repeatStringNumTimes("abc", -2) should return ""');
});

test('Truncate a string', function (assert) {
  assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", 11), "A-tisket...", 'truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket..."');
  assert.equal(truncateString("Peter Piper picked a peck of pickled peppers", 14), "Peter Piper...", 'truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper..."');
  assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length), "A-tisket a-tasket A green and yellow basket", 'truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket"');
  assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2), "A-tisket a-tasket A green and yellow basket", 'truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket"');
  assert.equal(truncateString("A-", 1), "A...", 'truncateString("A-", 1) should return "A..."');
  assert.equal(truncateString("Absolutely Longer", 2), "Ab...", 'truncateString("Absolutely Longer", 2) should return "Ab..."');
});

test('Chunky Monkey', function (assert) {
  assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]], 'chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]');
});

test('Slasher Flick', function (assert) {
  assert.deepEqual(slasher([1, 2, 3], 2), [3], 'slasher([1, 2, 3], 2) should return [3]');
  assert.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3], 'slasher([1, 2, 3], 0) should return [1, 2, 3]');
  assert.deepEqual(slasher([1, 2, 3], 9), [], 'slasher([1, 2, 3], 9) should return []');
  assert.deepEqual(slasher([1, 2, 3], 4), [], 'slasher([1, 2, 3], 4) should return []');
  assert.deepEqual(slasher(["burgers", "fries", "shake"], 1), ["fries", "shake"], 'slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"]');
  assert.deepEqual(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5), ["cheese", 4], 'slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4]');
});

test('Mutations', function (assert) {
  assert.notOk(mutation(["hello", "hey"]), 'mutation(["hello", "hey"]) should return false');
  assert.ok(mutation(["hello", "Hello"]), 'mutation(["hello", "Hello"]) should return true');
  assert.ok(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]), 'mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true');
  assert.ok(mutation(["Mary", "Army"]), 'mutation(["Mary", "Army"]) should return true');
  assert.ok(mutation(["Mary", "Aarmy"]), 'mutation(["Mary", "Aarmy"]) should return true');
  assert.ok(mutation(["Alien", "line"]), 'mutation(["Alien", "line"]) should return true');
  assert.ok(mutation(["floor", "for"]), 'mutation(["floor", "for"]) should return true');
  assert.notOk(mutation(["hello", "neo"]), 'mutation(["hello", "neo"]) should return false');
  assert.notOk(mutation(["voodoo", "no"]), 'mutation(["voodoo", "no"]) should return false');
});