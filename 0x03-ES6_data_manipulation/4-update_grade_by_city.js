export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  const targetCity = studentArray.filter((student) => student.location === city);

  return targetCity.map((student) => {
    const matchId = newGrades.find((arrayId) => student.id === arrayId.studentId);
    return (
      {
        ...student,
        grade: matchId ? matchId.studentId : 'N/A',
      }
    );
  });
}
