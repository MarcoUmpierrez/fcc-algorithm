function sumAll(arr) {
  let init, end;
  if (arr[0] < arr[1]) {
    init = arr[0];
    end = arr[1];
  } else {
    init = arr[1];
    end = arr[0];
  }

  let result = 0;
  for (let i = init; i <= end; i++) {
    result += i;
  }

  return result;
}

function diffArray(arr1, arr2) {
  let newArr = [];
  arr1.forEach(num => {
    if (arr2.indexOf(num) === -1) {
      newArr.push(num);
    }
  });


  arr2.forEach(num => {
    if (arr1.indexOf(num) === -1) {
      newArr.push(num);
    }
  });
  return newArr;
}

function convertToRoman(num) {
  let arr = num.toString().split('').reverse();
  // TODO: this work but I can do it better
  let romans = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM', 'MV', 'V', 'VM', 'VMM', 'VMMM', 'MX']
  ];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = romans[i][parseInt(arr[i])];
  }
  return arr.reverse().join('');
}

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter(item => {
    for (let key in source) {
      if (!item.hasOwnProperty(key) || item[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });

  // Only change code above this line
  return arr;
}

function myReplace(str, before, after) {
  let index = str.indexOf(before);
  let firstLetter = str.substring(index, index + 1);
  let replace = '';
  if (firstLetter === firstLetter.toLowerCase()) {
    replace = after.charAt(0).toLowerCase() + after.substring(1, after.length);
  } else {
    replace = after.charAt(0).toUpperCase() + after.substring(1, after.length);
  }

  return str.substring(0, index) + replace + str.substring(index + before.length, str.length);
}

function translatePigLatin(str) {
  let array = str.split(' ');
  let result = "";
  array.forEach(item => {
    let index;
    for (let i = 0; i < item.length; i++) {
      if (item.substr(i, 1).match('[aeiou]') !== null) {
        index = i;
        break;
      }
    }

    if (index === 0) {
      result = result + " " + item + 'way';
    } else {
      result = result + " " + item.substr(index, item.length) + item.substr(0, index) + 'ay';
    }
  });
  return result.substr(1, result.length);
}

function pairElement(str) {
  let array = [];
  str.split('').forEach(letter => {
    switch (letter) {
      case 'A':
        array.push(['A', 'T']);
        break;
      case 'T':
        array.push(['T', 'A']);
        break;
      case 'C':
        array.push(['C', 'G']);
        break;
      case 'G':
        array.push(['G', 'C']);
        break;
    }
  });
  return array;
}

function fearNotLetter(str) {
  let result = "";
  let index = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    index = index + 1;
    let code = str.charCodeAt(i);
    while (index !== code) {
      result = result + String.fromCharCode(index);
      index = index + 1;
    }
  }
  return result === "" ? undefined : result;
}

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool === true || bool === false;
}

function uniteUnique(arr) {
  let array = [...arguments];
  let flat = array.reduce(function (a, b) {
    return a.concat(b);
  }, []);
  let result = [];
  for (let i = flat.length; i > 0; i--) {
    let tail = flat.pop();
    if (flat.indexOf(tail) === -1) {
      result.unshift(tail);
    }
  }
  return result;
}

function convertHTML(str) {
  function replacer(match) {
    switch (match) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
    }
  }
  return str.replace(/[&<>'"]/g, replacer);
}

function spinalCase(str) {
  function isLetter(letter) { return letter.match(/[A-Za-z]/) !== null; }
  function isLowerCase(letter) { return letter === letter.toLowerCase(); }

  let result = '';
  let index = 0;
  while (index < str.length) {
    if (isLetter(str[index])) {
      if (!isLowerCase(str[index])) {
        result += index === 0 ? str[index].toLowerCase() : '-' + str[index].toLowerCase();
      } else {
        result += str[index];
      }
    } else {
      result += '-' + str[index + 1].toLowerCase();
      index++;
    }
    index++;
  }
  return result;
}

function sumFibs(num) {
  let fibNumbers = [];
  let x = 0, y = 1, z = 1;
  for (let i = 0; z <= num; i++) {
    fibNumbers.push(z);
    x = y;
    y = z;
    z = x + y;
  }
  fibNumbers.unshift(1);
  let result = 0;
  for (let i = 0; i < fibNumbers.length; i++) {
    if (fibNumbers[i] % 2 !== 0) {
      result += fibNumbers[i];
    }
  }
  return result;
}