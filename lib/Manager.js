const Employee = require('../lib/Employee');

class Manager extends Employee {

  constructor(name, id, email, onumber) {
    super(name, id, email)
    this.onumber = onumber;
  }
  getOnumber() {
    return this.onumber
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;