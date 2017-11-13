const shell = require('shelljs');

const teste = shell.exec('git diff');
console.log(teste);
