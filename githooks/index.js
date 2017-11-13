const sh = require('shelljs');

const colorRed = '$(tput setaf 1)'
const {stdout} = sh.exec('git log --branches --not --remotes --oneline --name-only', {silent: true});

if (stdout.includes('index.js')) {
    sh.message(`${colorRed}You can't change index.js file`);
    sh.exit(1);
}
