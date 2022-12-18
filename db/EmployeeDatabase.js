const db = require("./Database");
const cTable = require("console.table");

exports.addDepartmnt = function (name) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO department (name) VALUES (?)",
      [name],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        resolve("Department Created!");
      }
    );
  });
};

exports.addRole = function (title, salary, departmentId) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",
      [title, salary, departmentId],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        resolve("Role Created!");
      }
    );
  });
};

exports.addEmployee = function (fname, lname, roleId, managerId) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
      [fname, lname, roleId, managerId != "null" ? managerId : undefined],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        resolve("Employee Created!");
      }
    );
  });
};

exports.updateEmployeeRole = function (employee_id, roleId) {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE employee SET role_id=? WHERE id=?",
      [employee_id, roleId],
      (err, result) => {
        if (err) {
          console.log(err);
        }

        resolve("Employee Role Updated!");
      }
    );
  });
};

exports.getDepartments = function () {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM department", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
      resolve(result);
    });
  });
};

exports.getRoles = function () {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM role", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
      resolve(result);
    });
  });
};

exports.getEmployees = function () {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM employee", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
      resolve(result);
    });
  });
};

exports.getDepartmentsIds = function () {
  return new Promise((resolve, reject) => {
    db.query("SELECT id FROM department", (err, result) => {
      if (err) {
        console.log(err);
      }
      data = result.map((i) => i.id + "");
      resolve(data);
    });
  });
};

exports.getRolesIds = function () {
  return new Promise((resolve, reject) => {
    db.query("SELECT id FROM role", (err, result) => {
      if (err) {
        console.log(err);
      }
      data = result.map((i) => i.id + "");
      resolve(data);
    });
  });
};

exports.getEmployeeIds = function () {
  return new Promise((resolve, reject) => {
    db.query("SELECT id FROM employee", (err, result) => {
      if (err) {
        console.log(err);
      }
      data = result.map((i) => i.id + "");
      data.push("null");
      resolve(data);
    });
  });
};
