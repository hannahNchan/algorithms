let array = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];
let rotates = 10;

const rotateArray = () => {
	for (let i = 0; i < array.length; i++) {
		console.log(i)
		if (rotates !== 0) {
			let currRotNum = array.shift();
			array.push(currRotNum);
			rotates -= 1;
	  }
  }
}

rotateArray(rotates, array);

console.log(array);
