const sh = require('shelljs');

const colorRed = '\033[0;31m';
const noColor = '\033[0m';
const {stdout} = sh.exec('git log --branches --not --remotes --oneline --name-only', {silent: true});

// Githook to prevent changing index.js
if (stdout.includes('index.js')) {
    sh.echo(`${colorRed}You can't change index.js file${noColor}`);
    sh.exit(1);
}
