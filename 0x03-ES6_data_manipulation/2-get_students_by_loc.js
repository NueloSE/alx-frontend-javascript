export default function getStudentsByLocation(studentArray) {
  return studentArray.filter((student) => student.location === 'San Francisco');
}
