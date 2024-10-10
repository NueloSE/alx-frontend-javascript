export default function hasValuesFromArray(setArray, checkArray) {
  for (let i = 0; i < checkArray.length; i += 1) {
    if (!setArray.has(checkArray[i])) {
      return false;
    }
  }
  return true;
}
