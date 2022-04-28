const Employee = require('../lib/Employee');
const employee = new Employee('Jelani', '333396', 'jmclean1@gmail.com');

test ('does constructor get value for employee object', () => {
  
  expect(employee.name).toBe('Jelani');
  expect(employee.id).toBe('333396');
  expect(employee.email).toBe('jmclean1@gmail.com');
});

test ('does getName method produce name', () => {
  expect(employee.getName()).toBe('Jelani');
});

test('does getId method produce id', () => {
  expect(employee.getId()).toBe('333396');
});

test('does getEmail method produce email', () => {
  expect(employee.getEmail()).toBe('jmclean1@gmail.com');
});

test('does getRole method produce employee', () => {
  expect(employee.getRole()).toBe('Employee');
});