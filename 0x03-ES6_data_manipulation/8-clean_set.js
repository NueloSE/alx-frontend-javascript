export default function cleanSet(set, startString) {
  let result = '';

  for (const idx of set) {
    if (idx.startsWith(startString) && startString !== '') {
      result += `${idx.slice(startString.length)}-`;
    }
  }

  result =  result.slice(0, -1);
  return result;
}
