const Intern = require('../lib/Intern');
const intern = new Intern('Jelani', '333396', 'jmclean1@gmail.com', 'Ryerson');

test ('does constructor get value for Intern object', () => {
  
  expect(intern.name).toBe('Jelani');
  expect(intern.id).toBe('333396');
  expect(intern.email).toBe('jmclean1@gmail.com');
  expect(intern.school).toBe('Ryerson')
});

test ('does getName method produce name', () => {
  expect(intern.getName()).toBe('Jelani');
});

test('does getId method produce id', () => {
  expect(intern.getId()).toBe('333396');
});

test('does getEmail method produce email', () => {
  expect(intern.getEmail()).toBe('jmclean1@gmail.com');
});

test('does getSchool method produce school', () => {
  expect(intern.getSchool()).toBe('Ryerson');
});


test('does getRole method produce Intern', () => {
  expect(intern.getRole()).toBe('Intern');
});