const fs = require('fs');
const path = require('path');

const Second_Filepath = path.resolve(__dirname, '../../src/Second.jsx');
const replace_routes_index_jsx_Filepath = path.resolve(
  __dirname,
  './replace/replace_routes_index_jsx.jsx'
);
const replace_Home_jsx_Filepath = path.resolve(
  __dirname,
  './replace/replace_Home.jsx'
);

const routerFilePath = path.resolve(__dirname, '../../src/routes/index.jsx');
const homeFilePath = path.resolve(__dirname, '../../src/components/Home.jsx');

function removeSecondFile() {
  if (!fs.existsSync(Second_Filepath)) return;
  fs.unlinkSync(Second_Filepath);
  console.log('src/view/Second.jsx文件已删除');
}

function replace_route_index_jsx() {
  if (
    !fs.existsSync(routerFilePath) ||
    !fs.existsSync(replace_routes_index_jsx_Filepath)
  )
    return;
  const routerFileContent = fs.readFileSync(
    replace_routes_index_jsx_Filepath,
    'utf8'
  );
  fs.writeFileSync(routerFilePath, routerFileContent, 'utf8');
  console.log('src/routes/index.jsx文件已替换');
}

function replace_home_jsx() {
  if (!fs.existsSync(homeFilePath) || !fs.existsSync(replace_Home_jsx_Filepath))
    return;
  const HomeFileContent = fs.readFileSync(replace_Home_jsx_Filepath, 'utf8');
  fs.writeFileSync(homeFilePath, HomeFileContent, 'utf8');
  console.log('src/components/Home.jsx文件已替换');
}

removeSecondFile();
replace_route_index_jsx();
replace_home_jsx();
