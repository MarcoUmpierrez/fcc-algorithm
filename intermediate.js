function sumAll(arr) {
  let init, end;
  if(arr[0] < arr[1]){
    init = arr[0];
    end = arr[1];
  } else {
    init = arr[1];
    end = arr[0];
  }
  
  let result = 0;
  for(let i=init; i<=end;i++){
    result += i;
  }
  
  return result;
}

function diffArray(arr1, arr2) {
  let newArr = [];
  arr1.forEach(num => {
    if(arr2.indexOf(num) === -1){
      newArr.push(num);
    }
  });
  
  
  arr2.forEach(num => {
    if(arr1.indexOf(num) === -1){
      newArr.push(num);
    }
  });
  return newArr;
}

function convertToRoman(num) {
 let arr = num.toString().split('').reverse();
 // TODO: this work but I can do it better
 let romans = [
     ['','I','II','III','IV','V','VI','VII','VIII','IX'],
     ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
     ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
     ['','M','MM','MMM','MV','V','VM','VMM','VMMM','MX']
   ];
 
 for(let i=0;i<arr.length;i++){
   arr[i] = romans[i][parseInt(arr[i])];
 } 
 return arr.reverse().join('');
}

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter(item => {
    for(let key in source) {
      if(!item.hasOwnProperty(key) || item[key] !== source[key]) {
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
  let firstLetter = str.substring(index,index + 1);
  let replace = '';
  if(firstLetter === firstLetter.toLowerCase()){
    replace = after.charAt(0).toLowerCase() + after.substring(1,after.length);
  } else {
    replace = after.charAt(0).toUpperCase() + after.substring(1,after.length);
  }
  
  return str.substring(0,index) + replace + str.substring(index + before.length, str.length);
}
