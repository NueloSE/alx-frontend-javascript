export default function getListStudentIds(studentArray) {
  if (!(studentArray instanceof Array)) {
    return [];
  }

  const studentMap = new Map();
  const studentKeys = [];
  for (const student of studentArray) {
    studentMap.set(student.id, student);
    studentKeys.push(student.id);
  }
  return (studentKeys);
}
