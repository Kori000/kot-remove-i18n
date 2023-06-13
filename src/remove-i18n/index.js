const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('确认要执行 remove-i18n 🍉 吗？此操作不可撤销! (y/n) ', answer => {
  if (answer.toLowerCase() === 'y') {
    // 执行 remove-i18n 的操作
    require('./remove-i18n.js');
    require('./replace.js');
  } else if (answer.toLowerCase() === 'n') {
    console.log('取消执行 remove-i18n');
  } else {
    console.log('输入y or n 😅');
  }

  rl.close();
});
