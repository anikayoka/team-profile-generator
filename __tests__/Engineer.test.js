const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Jelani', '333396', 'jmclean1@gmail.com', 'jaylanz');

test ('does constructor get value for Engineer object', () => {
  
  expect(engineer.name).toBe('Jelani');
  expect(engineer.id).toBe('333396');
  expect(engineer.email).toBe('jmclean1@gmail.com');
  expect(engineer.github).toBe('jaylanz')
});

test ('does getName method produce name', () => {
  expect(engineer.getName()).toBe('Jelani');
});

test('does getId method produce id', () => {
  expect(engineer.getId()).toBe('333396');
});

test('does getEmail method produce email', () => {
  expect(engineer.getEmail()).toBe('jmclean1@gmail.com');
});

test('does getGithub method produce github username', () => {
  expect(engineer.getGithub()).toBe('jaylanz');
});


test('does getRole method produce Engineer', () => {
  expect(engineer.getRole()).toBe('Engineer');
});