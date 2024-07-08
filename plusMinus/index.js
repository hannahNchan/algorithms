function plusMinus(array) {
  const size = array.length;

	let negatives = 0;
	let positives = 0;
	let zeros = 0;

	array.map(item => {
		if (Math.sign(item) ===  1) {
      positives += 1;
		} else if (Math.sign(item) === -1) {
			negatives += 1;
		} else {
			zeros += 1;
		}
	})

  const ratioPositives = Number.parseFloat(positives/size).toFixed(6);
  const ratioNegatives = Number.parseFloat(negatives/size).toFixed(6);
  const ratioZeros = Number.parseFloat(zeros/size).toFixed(6);

	console.log(ratioPositives, ratioNegatives, ratioZeros);

}

plusMinus([ -4, 3, -9, 0, 4, 1 ]);
