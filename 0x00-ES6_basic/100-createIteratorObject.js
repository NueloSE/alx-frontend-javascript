export default function createIteratorObject(report) {
  let iterableList = [];

  for (const [key, value] of Object.entries(report.allEmployees)) {
    iterableList.push(...value);
  }
  return iterableList;
}
