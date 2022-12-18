const inquirer = require("inquirer");
const questions = require("./questions");
const {
  addDepartmnt,
  addEmployee,
  addRole,
  getDepartments,
  getDepartmentsIds,
  getRoles,
  getEmployees,
  getEmployeeIds,
  getRolesIds,
  updateEmployeeRole,
} = require("./db/EmployeeDatabase");

function start() {
  inquirer.prompt(questions.mainMenuQuestions).then((answers) => {
    switch (answers.option) {
      case "view-departments":
        listDepartments();
        break;
      case "view-roles":
        listRoles();
        break;
      case "view-employees":
        listEmployees();
        break;
      case "add-department":
        createDepartment();
        break;
      case "add-role":
        createRole();
        break;
      case "add-employee":
        createEmployee();
        break;
      case "update-role":
        updateEmployeeRoleById();
        break;

      default:
        break;
    }
  });
}

start();

function listDepartments() {
  getDepartments().then((res) => {
    start();
  });
}

function listRoles() {
  getRoles().then((res) => {
    start();
  });
}

function listEmployees() {
  getEmployees().then((res) => {
    start();
  });
}

function createDepartment() {
  inquirer.prompt(questions.addDeaprtmentQuestions).then((anwsers) => {
    addDepartmnt(anwsers.department_name).then((res) => {
      start();
    });
  });
}

async function createRole() {
  const roleQuestions = questions.addRoleQuestions;
  roleQuestions[2].choices = await getDepartmentsIds();
  inquirer.prompt(roleQuestions).then((anwsers) => {
    addRole(anwsers.title, anwsers.salary, anwsers.department_id).then(
      (res) => {
        start();
      }
    );
  });
}

async function createEmployee() {
  const employeeQuestions = questions.addEmployeeQuestions;
  employeeQuestions[2].choices = await getRolesIds();
  employeeQuestions[3].choices = await getEmployeeIds();
  inquirer.prompt(employeeQuestions).then((answers) => {
    addEmployee(
      answers.first_name,
      answers.last_name,
      answers.role_id,
      answers.manager_id
    ).then((res) => {
      start();
    });
  });
}

async function updateEmployeeRoleById() {
  let updateQuestions = questions.updateEmployeeRoleQuestions;
  updateQuestions[0].choices = await getEmployeeIds();
  updateQuestions[1].choices = await getRolesIds();

  inquirer.prompt(updateQuestions).then((answers) => {
    updateEmployeeRole(answers.employee_id, answers.role_id).then((res) => {
      start();
    });
  });
}
