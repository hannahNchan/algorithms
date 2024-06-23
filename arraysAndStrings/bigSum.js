const bigString = '1001458909 1004570889 1007019111 1003302837 1002514638 1006431461 1002575010 1007514041 1007548981 1004402249';

function convertedBigString(str) {
  return str.split(' ');
}

const sumBigString = () => {
	const getString = convertedBigString(bigString)
	return getString.reduce((a,b) => Number(a) + Number(b), 0);
}


console.log(sumBigString())
