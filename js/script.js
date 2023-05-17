//1
function findLongestUniqueSubstring(string) {
  let start = 0; 
  let end = 0; 
  let maxLength = 0; 
  let characters = new Set(); 

  while (end < string.length) {
    
    if (characters.has(string[end])) {
      characters.delete(string[start]);
      start++;
    }
    
    else {
      characters.add(string[end]);
      end++;
      
      maxLength = Math.max(maxLength, end - start);
    }
  }

  return maxLength;
}

//2
const string = "abccdefg";
const result = findLongestUniqueSubstring(string);
console.log(result); 

function convertStringToCodes(string) {
  const codes = [];
  
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    codes.push(code);
  }
  
  return codes;
}


const string2 = "Hello, World!";
const codes = convertStringToCodes(string);
console.log(codes);




