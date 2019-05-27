const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

function createApp(projectName) {
  const root = path.resolve(projectName);
  const appName = path.basename(root);
  const nowDirectory = process.cwd();
  const useYarn = shouldUseYarn();

  // checkAppName(appName); 
  fs.ensureDirSync(root); // 创建项目文件夹

  // if (!isSafeToCreateProjectIn(root, name)) {
  //   process.exit(1); // 不合法结束进程
  // }

  console.log(`
    新创建的项目地址为：${chalk.green(path.resolve(nowDirectory, root))}
  `)
  
  // const packageJson = {
  //   name: appName,
  //   version: '0.1.0',
  //   private: true,
  // };
  // // 往我们创建的文件夹中写入package.json文件
  // fs.writeFileSync(
  //   path.join(root, 'package.json'),
  //   JSON.stringify(packageJson, null, 2)
  // );

  // 改变node进程目录
  process.chdir(root);
  console.log(process.cwd());
}

function shouldUseYarn() {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = createApp;