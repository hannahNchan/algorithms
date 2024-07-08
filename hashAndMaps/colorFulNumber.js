function colofFulNumber(number) {
	const arrayed = String(number).split('');
	let subsets = [];

	subsets.push(...arrayed);

	const factorial = Array.from({length: arrayed.length}, (_,i) => i + 1)
	  .reduce((i,v) => i + v,0);
	console.log(factorial)
	
}

colofFulNumber(3245);
