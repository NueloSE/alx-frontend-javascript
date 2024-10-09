export default function getListStudentIds(studentArray) {
  if (!(studentArray instanceof Array)) {
    return [];
  }

  return studentArray.map((student) => student.id);
}
