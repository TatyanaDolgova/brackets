// module.exports = 
function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let bracketsPair = {};

  bracketsConfig.forEach(i => {
    openBrackets.push(i[0]);  
  });

  bracketsConfig.forEach(i => {
    bracketsPair[i[1]] = [i[0]].toString();
  });

  console.log(openBrackets);
  console.log(bracketsPair);

  for(let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];


    if(openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if(stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      if(topElement === bracketsPair[currentSymbol]) {
        stack.pop();
      } else {
        return false;
      }
    }
    
  }
  console.log(stack);
}

check('||', [['|', '|']]);

