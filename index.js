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
      const newTeam = new Manager(name, id, email, officeNumber)
      html += `
    
    <div class="card" style="width: 18rem;">

  <div class="card-body text-center text-white">
    <h5 class="card-title">${newTeam.name}</h5>
    <p class="card-text"><i class="fa-solid fa-people-roof"></i><span>${newTeam.getRole()}</span></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newTeam.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${newTeam.email}">${newTeam.email}</a></li>
    <li class="list-group-item">Office Number: ${newTeam.officeNumber}</li>
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
  ]).then(({ name }) => {
    switch (name) {
      case "Add engineer":
        addteamEngineer();
        break;
      case "Add Intern":
        addteamIntern();
        break;
      case "Exit app":

        {
          console.log('we are in switch case')
          exitApp();
          break;
        }


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
      const newTeam = new Engineer(name, id, email, github)
      html += `
    
    <div class="card" style="width: 18rem;">

  <div class="card-body text-center text-white">
    <h5 class="card-title">${newTeam.name}</h5>
    <p class="card-text"><i class="fas fa-glasses"></i><span>${newTeam.getRole()}</span></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newTeam.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${newTeam.email}">${newTeam.email}</a></li>
    <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${newTeam.github}">${newTeam.github}</a></li>
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
      const newTeam = new Intern(name, id, email, school)
      html += `
    
    <div class="card" style="width: 18rem;">

  <div class="card-body text-center text-white">
    <h5 class="card-title">${newTeam.name}</h5>
    <p class="card-text"><i class="fa-solid fa-graduation-cap"></i><span>${newTeam.getRole()}</span></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newTeam.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${newTeam.email}">${newTeam.email}</a></li>
    <li class="list-group-item">School: ${newTeam.school}</li>
  </ul>
</div>`

      team();

    })
}

const exitApp = () => {
  const fileContent = `
  <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../dist/style.css" />
  </head>
  <body>
  <header class="container-fluid text-center text-white">
    <h1>Team Bootcamp</h1>
  </header>
  <div class="card-deck">
${html}
  </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>`


  fs.writeFileSync(`./dist/index.html`, fileContent, function (error) {
    if (error) throw error;
  })
}

addManager();