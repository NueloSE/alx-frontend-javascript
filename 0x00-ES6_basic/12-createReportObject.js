export default function createReportObject(employeesList) {
  let allEmployeeList = {};

  for (const [key, value] of Object.entries(employeesList)) {
    allEmployeeList[key] = value;
  }

  const res = {
    allEmployees: allEmployeeList,
    getNumberOfDepartments(arrayOfEmployees) {
		let count = 0;
		for (const idx in arrayOfEmployees) {
		  count += 1;
		}
		return count;
	  },
  };

  return res;
}
