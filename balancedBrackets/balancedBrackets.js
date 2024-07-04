function isBalanced(s) {
  const openBrackets = ['{', '[', '('];
  const corresponseBracket = {
    ']': '[',
    '}': '{',
    ')': '('
  };
  const stack = [];
  const isOpenBracket = (char) => openBrackets.includes(char);
  const isStackEmpty = stack.length === 0 ? true : false;

  for (let char of s) {
    if (isOpenBracket(char)) {
      stack.push(char);
    } else {
      if (isStackEmpty) {
        return 'NO';
      } else {
        let lastBracket = stack.pop();
        if (char !== lastBracket) {
          return 'NO';
        }
      }
    }
  }
  return isStackEmpty ? 'YES' : 'NO';
}

const string = '{{[[(())]]}}'

console.log(isBalanced(string));
