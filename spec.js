var index = require('./index');

var test;
test = index.isBad('password');
if (!test) {
  console.log('Expected "password" to be a bad password');
  process.exit(1);
}

test = index.isBad('PASSword');
if (!test) {
  console.log('Expected "PASSword" to be a bad password');
  process.exit(1);
}

test = index.isBad('this8iscomplicated$');
if (test) {
  console.log('Expected "PASSword" to NOT be a bad password');
  process.exit(1);
}

console.log('All tests pass!');
process.exit(0);
