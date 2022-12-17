const inquirer = require("inquirer");
const questions = require("./questions");
const {
  addDepartmnt,
  addEmployee,
  addRole,
  getDepartments,
  getDepartmentsIds,
} = require("./db/EmployeeDatabase");

function start() {
  inquirer.prompt(questions.mainMenuQuestions).then((answers) => {
    switch (answers.option) {
      case "view-departments":
        getDepartments();
        break;
      case "view-roles":
        break;
      case "view-employees":
        break;
      case "add-department":
        createDepartment();
        break;
      case "add-role":
        createRole();
        break;
      case "add-employee":
        break;
      case "update-role":
        break;

      default:
        break;
    }
  });
}

start();

function createDepartment() {
  inquirer.prompt(questions.addDeaprtmentQuestions).then((anwsers) => {
    addDepartmnt(anwsers.department_name);
  });
}
function createRole() {
  const roleQuestions = questions.addRoleQuestions;
  roleQuestions[2] = roleQuestions[2].choices = getDepartmentsIds();
  inquirer.prompt(roleQuestions).then((anwsers) => {
    addRole(anwsers.title, anwsers.salary, anwsers.department_id);
  });
}
