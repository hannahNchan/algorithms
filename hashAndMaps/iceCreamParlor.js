function icecreamParlor(m, array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i; j < array.length - 1; j++) {
			const pointerI = array[i];
			const pointerJ = array[j + 1];
			if (i + 1 !== j + 2 && (pointerI + pointerJ) === m) {
        return [i + 1, j + 2];
			}
		}
	}
}

console.log(icecreamParlor(8, [1, 3, 4, 4, 6, 8]));

