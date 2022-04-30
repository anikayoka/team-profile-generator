const Manager = require('../lib/Manager');
const manager = new Manager('Jelani', '333396', 'jmclean1@gmail.com', '033');

test ('does constructor get value for Manager object', () => {
  
  expect(manager.name).toBe('Jelani');
  expect(manager.id).toBe('333396');
  expect(manager.email).toBe('jmclean1@gmail.com');
  expect(manager.officeNumber).toBe('033')
});

test ('does getName method produce name', () => {
  expect(manager.getName()).toBe('Jelani');
});

test('does getId method produce id', () => {
  expect(manager.getId()).toBe('333396');
});

test('does getEmail method produce email', () => {
  expect(manager.getEmail()).toBe('jmclean1@gmail.com');
});

test('does getOfficeNumber method produce ofice number', () => {
  expect(manager.getOfficeNumber()).toBe('033');
});


test('does getRole method produce Manager', () => {
  expect(manager.getRole()).toBe('Manager');
});