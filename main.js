function bar(){
  return true;
};

function reverseString(str) {
  return str.split("").reverse().join("");
}

function factorialize(num) {
  let result = 1;
  for (let i=1;i<=num;i++){
    result*=i;
  }
  return result;
}

function palindrome(str) {
  let cleanStr = str.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();
  return cleanStr.localeCompare(cleanStr.split("").reverse().join("")) === 0;
}