export default function createEmployeesObject(departmentName, employees) {
  let depart = {};
  let employeesList = [];

  for (const idx of employees) {
    employeesList.push(idx);
  }

  depart[departmentName] = employeesList

  return depart
}
