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

      team();

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

const addteamEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter Engineer name:"
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
      name: "github",
      message: "Enter github unername:"
    },
  ])
    .then(({
      name, id, email, github
    }) => {
      const newHire = new Engineer(name, id, email, github)
      html += `
    
    <div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${newHire.name}</h5>
    <p class="card-text">${newHire.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${newHire.id}</li>
    <li class="list-group-item">${newHire.email}</li>
    <li class="list-group-item">${newHire.github}</li>
  </ul>
</div>`

      team();

    })
}

const addteamIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter intern name:"
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
      name: "school",
      message: "Enter school attended:"
    },
  ])
    .then(({
      name, id, email, school
    }) => {
      const newHire = new Intern (name, id, email, school)
      html += `
    
    <div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${newHire.name}</h5>
    <p class="card-text">${newHire.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${newHire.id}</li>
    <li class="list-group-item">${newHire.email}</li>
    <li class="list-group-item">${newHire.school}</li>
  </ul>
</div>`

      team();

    })
}