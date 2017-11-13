const sh = require('shelljs');

const { stdout, stderr, code } = sh.exec('git log --branches --not --remotes --oneline --name-only', { silent: true });
console.log('stdout:', stdout);
console.log('stderr:', stderr);
console.log('code:', code);
