const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

let html = "";

const addManager = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter Manager name:"
    },
    {
      type: "input",
      name: "id",
      message: "Enter ID number:"
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address:"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter Manager office number:"
    },
  ])
    .then(({
      name, id, email, officeNumber
    }) => {
      const newHire = new Manager(name, id, email, officeNumber)
      html += `
    
    <div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${newHire.name}</h5>
    <p class="card-text">${newHire.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${newHire.id}</li>
    <li class="list-group-item">${newHire.email}</li>
    <li class="list-group-item">${newHire.onumber}</li>
  </ul>
</div>`
    })
}

const team = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "name",
      message: "Choose new member of the team:",
      choices: ["Add engineer", "Add Intern", "Exit app"]

    }
  ]).then(({ response }) => {
    switch (response) {
      case "Add engineer":
        teamEngineer();
        break;
      case "Add Intern":
        teamIntern();
        break;
      case "Exit app":
        exitApp();
        break;
    }
  })
}