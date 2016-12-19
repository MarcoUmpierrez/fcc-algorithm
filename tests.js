const { test } = QUnit;

test('Testing the test suit', function (assert) {
  assert.ok(true, 'test suit works');
});

test('Testing the functions of the basic.js file', function (assert) {
  assert.ok(bar(), 'function is gotten and returns true');
});

test('Basic:Reverse a String', function (assert) {
  assert.equal(typeof reverseString('hello'), 'string', 'reverseString("hello") should return a string');
  assert.equal(reverseString('hello'), 'olleh', 'reverseString("hello") should become "olleh"');
  assert.equal(reverseString('Greetings from Earth'), 'htraE morf sgniteerG', 'reverseString("Greetings from Earth") should return "htraE morf sgniteerG"');
});

test('Basic:Factorialize a Number', function (assert) {
  assert.equal(typeof factorialize(5), 'number', 'factorialize(5) should return a number');
  assert.equal(factorialize(5), 120, 'factorialize(5) should return 120');
  assert.equal(factorialize(10), 3628800, 'factorialize(10) should return 3628800');
  assert.equal(factorialize(20), 2432902008176640000, 'factorialize(20) should return 2432902008176640000');
  assert.equal(factorialize(0), 1, 'factorialize(0) should return 1');
});

test('Basic:Check for Palindromes', function (assert) {
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

test('Basic:Find the Longest Word in a String', function (assert) {
  assert.equal(typeof findLongestWord("The quick brown fox jumped over the lazy dog"), 'number', 'findLongestWord("The quick brown fox jumped over the lazy dog") should return a number');
  assert.equal(findLongestWord("The quick brown fox jumped over the lazy dog"), 6, 'findLongestWord("The quick brown fox jumped over the lazy dog") should return 6');
  assert.equal(findLongestWord("May the force be with you"), 5, 'findLongestWord("May the force be with you") should return 5');
  assert.equal(findLongestWord("Google do a barrel roll"), 6, 'findLongestWord("Google do a barrel roll") should return 6');
  assert.equal(findLongestWord("What is the average airspeed velocity of an unladen swallow"), 8, 'findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8');
  assert.equal(findLongestWord("What if we try a super-long word such as otorhinolaryngology"), 19, 'findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19');
});

test('Basic:Title Case a Sentence', function (assert) {
  assert.equal(typeof titleCase("I'm a little tea pot"), 'string', 'titleCase("I\'m a little tea pot") should return a string');
  assert.equal(titleCase("I\'m a little tea pot"), "I'm A Little Tea Pot", 'titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot"');
  assert.equal(titleCase("sHoRt AnD sToUt"), "Short And Stout", 'titleCase("sHoRt AnD sToUt") should return "Short And Stout"');
  assert.equal(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"), "Here Is My Handle Here Is My Spout", 'titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout"');
});

test('Basic:Return Largest Numbers in Arrays', function (assert) {
  assert.ok(Array.isArray(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])), 'largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array');
  assert.deepEqual(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27, 5, 39, 1001], 'largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001]');
  assert.deepEqual(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9, 35, 97, 1000000], 'largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]');
});

test('Basic:Confirm the Ending', function (assert) {
  assert.ok(confirmEnding("Bastian", "n"), 'confirmEnding("Bastian", "n") should return true');
  assert.notOk(confirmEnding("Connor", "n"), 'confirmEnding("Connor", "n") should return false');
  assert.notOk(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"), 'confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false');
  assert.ok(confirmEnding("He has to give me a new name", "name"), 'confirmEnding("He has to give me a new name", "name") should return true');
  assert.ok(confirmEnding("Open sesame", "same"), 'confirmEnding("Open sesame", "same") should return true');
  assert.notOk(confirmEnding("Open sesame", "pen"), 'confirmEnding("Open sesame", "pen") should return false');
  assert.notOk(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"), 'confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false');
});

test('Basic:Repeat a string repeat a string', function (assert) {
  assert.equal(repeatStringNumTimes("*", 3), "***", 'repeatStringNumTimes("*", 3) should return "***"');
  assert.equal(repeatStringNumTimes("abc", 3), "abcabcabc", 'repeatStringNumTimes("abc", 3) should return "abcabcabc"');
  assert.equal(repeatStringNumTimes("abc", 4), "abcabcabcabc", 'repeatStringNumTimes("abc", 4) should return "abcabcabcabc"');
  assert.equal(repeatStringNumTimes("abc", 1), "abc", 'repeatStringNumTimes("abc", 1) should return "abc"');
  assert.equal(repeatStringNumTimes("*", 8), "********", 'repeatStringNumTimes("*", 8) should return "********"');
  assert.equal(repeatStringNumTimes("abc", -2), "", 'repeatStringNumTimes("abc", -2) should return ""');
});

test('Basic:Truncate a string', function (assert) {
  assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", 11), "A-tisket...", 'truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket..."');
  assert.equal(truncateString("Peter Piper picked a peck of pickled peppers", 14), "Peter Piper...", 'truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper..."');
  assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length), "A-tisket a-tasket A green and yellow basket", 'truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket"');
  assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2), "A-tisket a-tasket A green and yellow basket", 'truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket"');
  assert.equal(truncateString("A-", 1), "A...", 'truncateString("A-", 1) should return "A..."');
  assert.equal(truncateString("Absolutely Longer", 2), "Ab...", 'truncateString("Absolutely Longer", 2) should return "Ab..."');
});

test('Basic:Chunky Monkey', function (assert) {
  assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]], 'chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]');
  assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]], 'chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]');
});

test('Basic:Slasher Flick', function (assert) {
  assert.deepEqual(slasher([1, 2, 3], 2), [3], 'slasher([1, 2, 3], 2) should return [3]');
  assert.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3], 'slasher([1, 2, 3], 0) should return [1, 2, 3]');
  assert.deepEqual(slasher([1, 2, 3], 9), [], 'slasher([1, 2, 3], 9) should return []');
  assert.deepEqual(slasher([1, 2, 3], 4), [], 'slasher([1, 2, 3], 4) should return []');
  assert.deepEqual(slasher(["burgers", "fries", "shake"], 1), ["fries", "shake"], 'slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"]');
  assert.deepEqual(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5), ["cheese", 4], 'slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4]');
});

test('Basic:Mutations', function (assert) {
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

test('Basic:Falsy Bouncer', function (assert) {
  assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9], 'bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9]');
  assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"], 'bouncer(["a", "b", "c"]) should return ["a", "b", "c"]');
  assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), [], 'bouncer([false, null, 0, NaN, undefined, ""]) should return []');
  assert.deepEqual(bouncer([1, null, NaN, 2, undefined]), [1, 2], 'bouncer([1, null, NaN, 2, undefined]) should return [1, 2]');
});

test('Basic:Seek and Destroy', function (assert) {
  assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], 'destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]');
  assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], 'destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]');
  assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], 'destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1]');
  assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], 'destroyer([2, 3, 2, 3], 2, 3) should return []');
  assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"], 'destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]');
});

test('Basic:Where do I belong', function (assert) {
  assert.equal(getIndexToIns([10, 20, 30, 40, 50], 35), 3, 'getIndexToIns([10, 20, 30, 40, 50], 35) should return 3');
  assert.equal(getIndexToIns([10, 20, 30, 40, 50], 30), 2, 'getIndexToIns([10, 20, 30, 40, 50], 30) should return 2');
  assert.equal(getIndexToIns([40, 60], 50), 1, 'getIndexToIns([40, 60], 50) should return 1');
  assert.equal(getIndexToIns([3, 10, 5], 3), 0, 'getIndexToIns([3, 10, 5], 3) should return 0');
  assert.equal(getIndexToIns([5, 3, 20, 3], 5), 2, 'getIndexToIns([5, 3, 20, 3], 5) should return 2');
  assert.equal(getIndexToIns([2, 20, 10], 19), 2, 'getIndexToIns([2, 20, 10], 19) should return 2');
  assert.equal(getIndexToIns([2, 5, 10], 15), 3, 'getIndexToIns([2, 5, 10], 15) should return 3');
});

test('Basic:Caesars Cipher', function (assert) {
  assert.equal(rot13("SERR PBQR PNZC"), "FREE CODE CAMP", 'rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"');
  assert.equal(rot13("SERR CVMMN!"), "FREE PIZZA!", 'rot13("SERR CVMMN!") should decode to "FREE PIZZA!"');
  assert.equal(rot13("SERR YBIR?"), "FREE LOVE?", 'rot13("SERR YBIR?") should decode to "FREE LOVE?"');
  assert.equal(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."), "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.", 'rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."');
});

test('Intermediate:Sum All Numbers in a Range', function (assert) {
  assert.equal(typeof sumAll([1, 4]), "number", 'sumAll([1, 4]) should return a number');
  assert.equal(sumAll([1, 4]), 10, 'sumAll([1, 4]) should return 10');
  assert.equal(sumAll([4, 1]), 10, 'sumAll([4, 1]) should return 10');
  assert.equal(sumAll([5, 10]), 45, 'sumAll([5, 10]) should return 45');
  assert.equal(sumAll([10, 5]), 45, 'sumAll([10, 5]) should return 45');
});

test('Intermediate:Diff Two Arrays', function (assert) {
  assert.ok(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])), 'diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array');
  assert.deepEqual(
    diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), 
    ["pink wool"], 
    'diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"]');
  assert.deepEqual(
    diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), 
    ["pink wool","diorite"], 
    'diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["diorite", "pink wool"]');
  assert.deepEqual(
    diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), 
    [], 
    'diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) should return []');
  assert.deepEqual(
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), 
    [4], 
    'diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4]');
  assert.deepEqual(
    diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), 
    ["piglet", 4], 
    'diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) should return ["piglet", 4]');  
  assert.deepEqual(
    diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), 
    ["snuffleupagus", "cookie monster", "elmo"], 
    'diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) should return ["snuffleupagus", "cookie monster", "elmo"]');      
  assert.deepEqual(
    diffArray([1, "calf", 3, "piglet"], [7, "filly"]), 
    [1, "calf", 3, "piglet", 7, "filly"], 
    'diffArray([1, "calf", 3, "piglet"], [7, "filly"]) should return [1, "calf", 3, "piglet", 7, "filly"]');   
});

test('Intermediate:Roman Numeral Converter', function (assert) {
  assert.equal(convertToRoman(2), "II", 'convertToRoman(2) should return "II"');
  assert.equal(convertToRoman(3), "III",'convertToRoman(3) should return "III"');
  assert.equal(convertToRoman(4), "IV",'convertToRoman(4) should return "IV"');
  assert.equal(convertToRoman(5), "V",'convertToRoman(5) should return "V"');
  assert.equal(convertToRoman(9), "IX",'convertToRoman(9) should return "IX"');
  assert.equal(convertToRoman(12), "XII",'convertToRoman(12) should return "XII"');
  assert.equal(convertToRoman(16), "XVI",'convertToRoman(16) should return "XVI"');
  assert.equal(convertToRoman(29), "XXIX",'convertToRoman(29) should return "XXIX"');
  assert.equal(convertToRoman(44), "XLIV",'convertToRoman(44) should return "XLIV"');
  assert.equal(convertToRoman(45), "XLV",'convertToRoman(45) should return "XLV"');
  assert.equal(convertToRoman(68),"LXVIII",'convertToRoman(68) should return "LXVIII"');
  assert.equal(convertToRoman(83), "LXXXIII",'convertToRoman(83) should return "LXXXIII"');
  assert.equal(convertToRoman(97), "XCVII",'convertToRoman(97) should return "XCVII"');
  assert.equal(convertToRoman(99), "XCIX",'convertToRoman(99) should return "XCIX"');
  assert.equal(convertToRoman(500), "D",'convertToRoman(500) should return "D"');
  assert.equal(convertToRoman(501), "DI",'convertToRoman(501) should return "DI"');
  assert.equal(convertToRoman(649), "DCXLIX",'convertToRoman(649) should return "DCXLIX"');
  assert.equal(convertToRoman(798), "DCCXCVIII",'convertToRoman(798) should return "DCCXCVIII"');
  assert.equal(convertToRoman(891), "DCCCXCI", 'convertToRoman(891) should return "DCCCXCI"');
  assert.equal(convertToRoman(1000), "M",'convertToRoman(1000) should return "M"');
  assert.equal(convertToRoman(1004), "MIV",'convertToRoman(1004) should return "MIV"');
  assert.equal(convertToRoman(1006), "MVI",'convertToRoman(1006) should return "MVI"');
  assert.equal(convertToRoman(1023), "MXXIII", 'convertToRoman(1023) should return "MXXIII"');
  assert.equal(convertToRoman(2014), "MMXIV", 'convertToRoman(2014) should return "MMXIV"');
  assert.equal(convertToRoman(3999), "MMMCMXCIX", 'convertToRoman(3999) should return "MMMCMXCIX"');
});

test('Intermediate:Wherefore art thou', function (assert) {
  assert.deepEqual(
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), 
    [{ first: "Tybalt", last: "Capulet" }], 
    'whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]');
  assert.deepEqual(
    whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }), 
    [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], 
    'whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]');
  assert.deepEqual(
    whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }), 
    [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }], 
    'whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]');
  assert.deepEqual(
    whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }), 
    [{ "a": 1, "b": 2, "c": 2 }], 
    'whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }]');
});

test('Intermediate:Search and Replace', function (assert) {
  assert.equal(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall", 'myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall"');
  assert.equal(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch", 'myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch"');
  assert.equal(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error", 'myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error"');
  assert.equal(myReplace("His name is Tom", "Tom", "john"), "His name is John", 'myReplace("His name is Tom", "Tom", "john") should return "His name is John"');
  assert.equal(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms", 'myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms"');
});

test('Intermediate:Pig Latin', function (assert) {
  assert.equal(translatePigLatin("california"), "aliforniacay", 'translatePigLatin("california") should return "aliforniacay"');
  assert.equal(translatePigLatin("paragraphs"), "aragraphspay", 'translatePigLatin("paragraphs") should return "aragraphspay"');
  assert.equal(translatePigLatin("glove"), "oveglay", 'translatePigLatin("glove") should return "oveglay"');
  assert.equal(translatePigLatin("algorithm"), "algorithmway", 'translatePigLatin("algorithm") should return "algorithmway"');
  assert.equal(translatePigLatin("eight"), "eightway", 'translatePigLatin("eight") should return "eightway"');
});

test('Intermediate:DNA Pairing', function (assert) {
  assert.deepEqual(pairElement("ATCGA"), [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]], 'pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]');
  assert.deepEqual(pairElement("TTGAG"), [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]], 'pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]');
  assert.deepEqual(pairElement("CTCTA"), [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]], 'pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]');
});

test('Intermediate:Missing letters', function (assert) {
  assert.equal(fearNotLetter("abce"), "d", 'fearNotLetter("abce") should return "d"');
  assert.equal(fearNotLetter("abcdefghjklmno"), "i", 'fearNotLetter("abcdefghjklmno") should return "i"');
  assert.equal(fearNotLetter("bcd"), undefined, 'fearNotLetter("bcd") should return undefined');
  assert.equal(fearNotLetter("yz"), undefined, 'fearNotLetter("yz") should return undefined');
});

test('Intermediate:Boo who', function (assert) {
  assert.ok(booWho(true), 'booWho(true) should return true');
  assert.ok(booWho(false), 'booWho(false) should return true');
  assert.notOk(booWho([1, 2, 3]), 'booWho([1, 2, 3]) should return false');
  assert.notOk(booWho([].slice), 'booWho([].slice) should return false');
  assert.notOk(booWho({ "a": 1 }), 'booWho({ "a": 1 }) should return false');
  assert.notOk(booWho(1), 'booWho(1) should return false');
  assert.notOk(booWho(NaN), 'booWho(NaN) should return false');
  assert.notOk(booWho("a"), 'booWho("a") should return false');
  assert.notOk(booWho("true"), 'booWho("true") should return false');
  assert.notOk(booWho("false"), 'booWho("false") should return false');
});

test('Intermediate:Sorted Union', function (assert) {
  assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4], 'uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]');
  assert.deepEqual(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]], 'uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]');
  assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5], 'uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]');
  assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8], 'uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]');
});

test('Intermediate:Convert HTML Entities', function (assert) {
  assert.equal(convertHTML("Dolce & Gabbana"), "Dolce &amp; Gabbana", 'convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana');
  assert.equal(convertHTML("Hamburgers < Pizza < Tacos"), "Hamburgers &lt; Pizza &lt; Tacos", 'convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos');
  assert.equal(convertHTML("Sixty > twelve"), "Sixty &gt; twelve", 'convertHTML("Sixty > twelve") should return Sixty &​gt; twelve');
  assert.equal(convertHTML('Stuff in "quotation marks"'), "Stuff in &quot;quotation marks&quot;", 'convertHTML(\'Stuff in "quotation marks"\') should return Stuff in &​quot;quotation marks&​quot;');
  assert.equal(convertHTML("Shindler's List"), "Shindler&apos;s List", 'convertHTML("Shindler\'s List") should return Shindler&​apos;s List');
  assert.equal(convertHTML("<>"), "&lt;&gt;", 'convertHTML("<>") should return &​lt;&​gt;');
  assert.equal(convertHTML("abc"), "abc", 'convertHTML("abc") should return abc');
});

test('Intermediate:Spinal Tap Case', function (assert) {
  assert.equal(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap", 'spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"');
  assert.equal(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap", 'spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"');
  assert.equal(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show", 'spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"');
  assert.equal(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh", 'spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh"');
  assert.equal(spinalCase("AllThe-small Things"), "all-the-small-things", 'spinalCase("AllThe-small Things") should return "all-the-small-things"');
});
