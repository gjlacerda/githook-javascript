const sh = require('shelljs');

sh.exec(`
    touch githooks/index2.js &&
    git add . &&
    git commit --amend --no-edit
`);
