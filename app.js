const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "morter706",
  database: "cms_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

start();
function start() {
  inquirer
    .prompt({
      name: "userSelection",
      message: "what would you like to do?",
      type: "list",
      choices: [
        "add department",
        "add pecking order",
        "add employee",
        "view departments",
        "view pecking order",
        "view employees",
        "update employee pecking order"
      ],
    })
    .then((doThis) => {
      //console.log(doThis.userSelection);
      if (doThis.userSelection === "view departments") {
            viewdepartment()
            connection.end() ;}
        else if(doThis.userSelection === "view pecking order"){
            getdpecking_order()
            connection.end() ;}
        else if(doThis.userSelection === "view employees"){
            getemployee()
            connection.end();}
        else if(doThis.userSelection === "add employee"){
            inquirer.prompt([
                {
               type: "input",
                name:"firstName",
                message: "what is the employee first name"
                },
                {
                    type: "input",
                name:"lastName",
                message: "what is the employee last name"
                 },
                {name: "peckingOrder",
                message: "what is the emoployee pecking order",
                choices: [1, 2, 3]
               },
                {name: "departmentManager",
                message: "employee department manager",
                choices: [0, 1, 2, 3]
               }]) .then((firstName, lastName, peckingOrder, departmentManager) => {
                connection.query("select * from employee INSERT INTO employee(first_name, last_name, pecking_order_id, manager_id)",[firstName, lastName, peckingOrder, departmentManager],(err,data)=>{
if(err) throw err;
console.table(data)
                })
                
                }) 
            }
               })
             }


  function addDepartment(name) {
    connection.query(
      "INSERT INTO department set ?",
      { name: name },
      (err, data) => {
        if (err) throw err;
        //console.table(data);
      }
    );
  }
  function addpecking_order(id, title, salary, department_id) {
    connection.query(
      "INSERT INTO pecking_order set ?",
      { id, title: title, salary: salary, department_id: department_id },
      (err, data) => {
        if (err) throw err;
        //console.table(data);
        return;
      }
    );
  }
  function addemployee(
    id,
    first_name,
    last_name,
    pecking_order_id,
    manager_id
  ) {
    connection.query(
      "INSERT INTO employee set ?",
      {
        id,
        first_name: first_name,
        last_name: last_name,
        pecking_order_id: pecking_order_id,
        manager_id: manager_id,
      },
      (err, data) => {
        if (err) throw err;
        //console.table(data);
        return;
      }
    );
  }
  function viewdepartment() {
    connection.query("SELECT * fROM department", (err, data) => {
      if (err) throw err;
      console.table(data);
    });
  }
  function getdpecking_order() {
    connection.query("SELECT * fROM pecking_order", (err, data) => {
      if (err) throw err;
      console.table(data);
      return;
    });
  }
  function getemployee() {
    connection.query("SELECT * fROM employee", (err, data) => {
      if (err) throw err;
      console.table(data);
      return;
    });
  }




// function afterConnection() {
//   connection.query("SELECT * FROM products", function (err, res) {
//     if (err) throw err;
//     console.log(res);
//
//   });
// }

//   function update_role_id() {
//       inquirer.prompt([
//           {
//           name: "update pecking order",
//           message: "change pecking ord",
//           type: "list",
//           choices: [1, 2, 3,]
//           }])
//           .then(newroll) =>{
//          connection.query(
//        "insert into employee set where role_id = ?",
//        [role_id: role_id],
//        (err, data) => {
//          if (err) throw err;
//          console.table(data);
//        })
     

//           }
//           }
      