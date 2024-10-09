export default function getListStudentIds(studentArray) {
  if (!(studentArray instanceof Array)) {
    return [];
  }
  const studentKeys = [];

  studentArray.map((student) => {
    studentKeys.push(student.id);
  });

  return studentKeys;
}
