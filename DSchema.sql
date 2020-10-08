CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Pecking_order(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary VARCHAR(45) NOT NULL,
  department_id INT default 0,
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  pecking_order_id INT default 0,
 manager_id INT default 0,
 PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("ware house"), ("office"), ("right of way");
SELECT * FROM department;

select * from pecking_order;
insert into pecking_order (title, salary, department_id)
values ("material handler", "60,000", 1), ("front desk", "45,000", 2), ("operators", "120,00", 3);

insert into employee(first_name, last_name, pecking_order_id, manager_id)
values ("frank", "ruiz", 1, 0), ("maria", "rivera", 2, 3), ("scott", "ryan", 3, 0);
select * from employee;

select * employee(role_id)
values (1), (2), (3);