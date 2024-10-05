export default function iterateThroughObject(reportWithIterator) {
  let res = reportWithIterator[0];

  for (const idx of reportWithIterator.slice(1, (reportWithIterator.length))) {
    res += ` | ${idx}`;
  }
  return(res);
}
