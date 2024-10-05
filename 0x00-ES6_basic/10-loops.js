export default function appendToEachArrayValue(array, appendString) {

let i = 0
for (const idx of array){
	let val = appendString + idx;
	array[i] = val
	i += 1;
}

  return array;
}
