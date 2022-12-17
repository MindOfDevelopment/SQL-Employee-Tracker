const mainMenuQuestions = [
  {
    type: "list",
    name: "option",
    message: "What would you like to do ?",
    choices: [
      { value: "view-departments", name: "view all departments" },
      { value: "view-roles", name: "view all roles" },
      { value: "view-employees", name: "view all employees" },
      { value: "add-department", name: "add a depaertment" },
      { value: "add-role", name: "add a role" },
      { value: "add-employee", name: "add an employee" },
      { value: "update-role", name: "update an employee role" },
    ],
  },
];

const addDeaprtmentQuestions = [
  {
    type: "input",
    name: "department_name",
    message: "Enter the name of the New Department...",
  },
];

const addRoleQuestions = [
  {
    type: "input",
    name: "title",
    message: "Enter the Title of the New Role...",
  },

  {
    type: "number",
    name: "salary",
    message: "Enter the Salary of the New Role (must be numeric)...",
  },

  {
    type: "list",
    name: "department_id",
    message: "Select the Department for The Role...",
    choices: [], // Dynamically popolate that in the Databese later
  },
];

const addEmployeeQuestions = [
  {
    type: "input",
    name: "first_name",
    message: "Enter the First Name of the Employee...",
  },

  {
    type: "list",
    name: "role_id",
    message: "Select the Role for the Employee...",
    choices: [],
  },

  {
    type: "list",
    name: "manager_id",
    message: "Select the Emplyee's Manager...",
    choices: [],
  },
];

const updateEmployeeRoleQuestions = [
  {
    type: "list",
    name: "employee_id",
    message: "Select the Employee to update...",
    choices: [],
  },

  {
    type: "list",
    name: "role_id",
    message: "Select the the Employee's New Role...",
    choices: [],
  },
];

module.exports = {
  mainMenuQuestions,
  addDeaprtmentQuestions,
  addRoleQuestions,
  addEmployeeQuestions,
  updateEmployeeRoleQuestions,
};
