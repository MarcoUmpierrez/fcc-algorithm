function bar() {
  return true;
};

function reverseString(str) {
  return str.split('').reverse().join('');
}

function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function palindrome(str) {
  let cleanStr = str.replace(/[^A-Za-z0-9]+/g, "").toLowerCase();
  return cleanStr.localeCompare(cleanStr.split("").reverse().join("")) === 0;
}

function findLongestWord(str) {
  let strArray = str.split(' ');
  let maxLength = 0;
  strArray.filter(word => {
    if (word.length > maxLength){
      maxLength = word.length;
    }
  });
  return maxLength;
}

function titleCase(str) {
  let strArray = str.split(' ');
  let result = strArray.map(word => {
    return word.replace(/([A-Za-z])(.+|$)/, (match, p1, p2) => {
        return p1.toUpperCase() + p2.toLowerCase();
    });
  });
  return result.join(' ');
}

function largestOfFour(arr) {
  let result = [];
  arr.forEach(subArr => {
    result.push(subArr.reduce((a, b) => { 
          return a > b? a : b;
        }));
  });
  return result;
}