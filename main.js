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
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });
  return maxLength;
}

function titleCase(str) {
  let strArray = str.split(' ');
  let result = strArray.map(word => {
    // /([A-Za-z])(.+|$)/ = 
    // group 1 a single alphabet character (case insensitive)
    // group 2 anything else or end of line (for words like "a")
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
      return a > b ? a : b;
    }));
  });
  return result;
}

function confirmEnding(str, target) {
  let lengthStr = str.length;
  let lengthTarget = target.length;
  return str.substr(lengthStr - lengthTarget, lengthTarget) === target;
}

function repeatStringNumTimes(str, num) {
  if (num > 0) {
    let result = "";
    for (let i = 0; i < num; i++) {
      result += str;
    }

    return result;
  }
  return "";
}

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    let dotsLength;
    if (num <= 3) {
      return `${str.substr(0, num - 0)}...`;
    } else {
      return `${str.substr(0, num - 3)}...`;
    }
  }
}

function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function slasher(arr, howMany) {
  return arr.splice(howMany, arr.length - howMany);
}

function mutation(arr) {
  let arg1 = arr[0].toLowerCase();
  let arg2 = arr[1].toLowerCase().split('');
  for (let i = 0; i < arg2.length; i++) {
    if (arg1.indexOf(arg2[i]) === -1) {
      return false;
    }
  }
  return true;
}

function bouncer(arr) {
  return arr.filter(value => {
    return Boolean(value) ? true : false;
  });
}

function destroyer(arr) {
  return arr.filter(value => {
    for (let i = 0; i < arguments.length; i++) {
      if (value === arguments[i]) {
        return false;
      }
    }
    return true;
  });
}

function getIndexToIns(arr, num) {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sortedArr.length; i++) {
    if (num <= sortedArr[i]) {
      return i;
    }
  }
  return sortedArr.length;
}

function rot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str.substr(i, 1).match(/[A-Z]/)) {
      let value = str.charCodeAt(i) - 13;
      if (value <= 64) {
        value = 90 - (64 - value);
      }
      result += String.fromCharCode(value);
    } else {
      result += str.substr(i, 1);
    }
  }
  return result;
}