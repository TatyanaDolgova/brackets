module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let bracketsPair = {};

  bracketsConfig.forEach((i) => {
    openBrackets.push(i[0]);
  });

  bracketsConfig.forEach((i) => {
    bracketsPair[i[1]] = [i[0]].toString();
  });

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];

    if (topElement === bracketsPair[currentSymbol] && topElement !== undefined) {
      stack.pop();
    } else if(openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
