function isBalanced(s) {
  const openBrackets = ['{', '[', '('];
  const corresponseBracket = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  const stack = [];
  const isOpenBracket = (char) => openBrackets.includes(char);
  const isStackEmpty = stack.length === 0 ? true : false;

  for (let char of s) {
    if (isOpenBracket(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return 'NO';
      } else {
        let lastBracket = stack.pop();
        if (char !== corresponseBracket[lastBracket]) {
          return 'NO';
        }
      }
    }
  }
  return isStackEmpty ? 'YES' : 'NO';
}

console.log(isBalanced('{(([])[])[]}'));
console.log(isBalanced('{(([])[])[]]}'));
console.log(isBalanced('{(([])[])[]}[]'));
