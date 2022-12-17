const db = require("./Database");
const cTable = require("console.table");

exports.addDepartmnt = function (name) {
  db.query(
    "INSERT INTO department (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Department Added!");
    }
  );
};

exports.addRole = function (title, salary, departmentId) {
  db.query(
    "INSERT INTO role (title, salary, departmen_id) VALUES (?,?,?)",
    [title, salary, departmentId],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Role Created!");
    }
  );
};

exports.addEmployee = function (fname, lname, roleId, managerId) {
  db.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
    [fname, lname, roleId, managerId],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Employee Created!");
    }
  );
};

exports.getDepartments = function () {
  db.query("SELECT * FROM department", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
};

exports.getDepartmentsIds = function () {
  db.query("SELECT id FROM department", (err, result) => {
    if (err) {
      console.log(err);
    }
    return result.map((i) => i.id);
  });
};
