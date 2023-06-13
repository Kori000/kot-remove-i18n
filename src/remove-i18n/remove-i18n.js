const fs = require('fs');
const path = require('path');

const i18nFilePath = path.resolve(__dirname, '../../src/i18n.js');

const mainFilePath = path.resolve(__dirname, '../../src/main.jsx');


function removeImportStatement_main_jsx () {
  let mainFileContent = fs.readFileSync(mainFilePath, 'utf8')
  let finalMainFileContent = mainFileContent.replace(/import\s+'?"?.\/i18n'?"?\s*;?/, '');
  fs.writeFileSync(mainFilePath, finalMainFileContent, 'utf8');
  console.log('main.jsx 已移除 i18n.js 引用')
}

function remove_i18n_js () {
  fs.unlinkSync(i18nFilePath);
  console.log('i18n.js 已删除')
}

fs.existsSync(mainFilePath) && removeImportStatement_main_jsx()
fs.existsSync(i18nFilePath) && remove_i18n_js()








