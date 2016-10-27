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