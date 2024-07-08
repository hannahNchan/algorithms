
const merge = (arr1, arr2) => {

  const result = [];

  // comparamos los valores menores de cada arreglo mientras
  // hayan valores en ambos arreglos
  while (arr1.length && arr2.length) {
    if (Number(arr1[0]) <= Number(arr2[0])) {
      // shit() remueve el primer valor del arreglo y lo devuelve
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  // si salimos del while loop es porque alguno de los dos arreglos
  // está vacío así que unimos los arreglos
  // utilice el método spread de ES6, pero igual puedes usar .concat()
  return [...result, ...arr1, ...arr2];
};

function mergeSort(arr) {
  // caso base que hará que la recursión pare
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length/2);
  // divide el arreglo por la mitad continuamente hasta quedar con arreglos de longitud = 1
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
	console.log({left, right})
  // envía los dos sub arreglos a la función merge
  return merge(left, right);
}

console.log(mergeSort([7,9,1,0,2,4,9,4]));
