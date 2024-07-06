function processData(input) {
  let inputStack = input;
  let stack = [];
  
  for (let i = 1; i <= Number(inputStack[0]); i++ ) {
      const [type, data] = inputStack[i].split(' ');

      const mapFunctions = {
          '1': () => stack.push(data),
          '2': () => stack.shift(),
          '3': () => console.log(stack[0])
      };
      mapFunctions[type]();
  }
}

processData([
'10',
'1 76',
'1 33',
'2',
'1 23',
'1 97',
'1 21',
'3',
'3',
'1 74',
'3']);