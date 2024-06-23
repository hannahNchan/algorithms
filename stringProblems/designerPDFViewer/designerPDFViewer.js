const h = [1,3,1,3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5];
const word = 'torn';

let alphabet = [];
let alphabetSeted = {};
let alphabetConverted = [];

const createAlphabet = () => {
  Array.from(Array(26).keys()).map(num => {
	  alphabet.push(String.fromCharCode(num + 97))
  })
}

const createSetAlphabet = () => {
	alphabet.map((letter, index) => {
		alphabetSeted[letter] = h[index];
	})
}

createAlphabet();
createSetAlphabet();

const getWordHeight = () => {
	let arrayNumsConverted = [];
	word.split('').map(letter => {
		arrayNumsConverted.push(alphabetSeted[letter]) 
	})
	alphabetConverted = [...arrayNumsConverted];
	return arrayNumsConverted.reduce((a, b) => a + b, 0);
}

getWordHeight();

const getHighestValue = () => alphabetConverted.sort((a,b) => b - a)[0];
const getTotalHeight = getHighestValue() * word.length;

console.log(getTotalHeight)
