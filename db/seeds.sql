INSERT INTO department (id, name) VALUES (1, 'HUMAN RESOURCES');
INSERT INTO department (id, name) VALUES (2, 'FINANCES');
INSERT INTO department (id, name) VALUES (3, 'IT');
INSERT INTO department (id, name) VALUES (4, 'SALES');


INSERT INTO role (id, title, salary, department_id) VALUES (1, 'HR Consultant', 90000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'HR Associate', 11000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Financial Analyst', 15000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'Investment Banker', 25000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'System Administrator', 13000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Sales Representative', 10000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (7, 'Product Support', 8000, 4);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'James', 'Jones' 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Mary', 'Taylor', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Michael', 'Campbell', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Barbara', 'Robertson', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'David', 'Walton', 5, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Susan', 'Robson', 6, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Richard', 'Hamilton', 7, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Thomas', 'Watkins', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, 'Donald', 'Pritchard', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (10, 'Margaret', 'Hammond', 7, 6);