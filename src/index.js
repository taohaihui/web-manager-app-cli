const commander = require('commander');
const chalk = require('chalk');
const envinfo = require('envinfo');
const packageJson = require('../package.json');
const createApp = require('./createApp');

let projectName = '';
const program = new commander.Command(packageJson.name);

program
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name;
  })
  .option('--verbose', 'print additional logs')
  .option('--info', 'print environment debug info')
  .allowUnknownOption()
  .on('--help', () => {
    console.log('this is help info');
  })
  .parse(process.argv);

  // web-manager-app-cli --info
if (program.info) {
  return envinfo.run(
    {
      System: ['OS', 'CPU'],
      Binaries: ['Node', 'npm', 'Yarn'],
      Browsers: ['Chrome', 'Edge', 'Internet Explorer', 'Firefox', 'Safari']
    },
    {
      duplicates: true,
      showNotFound: true,
    }
  ).then(console.log);
}

// web-manager-app-cli
if (!projectName) {
  console.log(
    chalk.red('error:未输入项目名称\n请在命令行工具下输入 web-manager-app-cli <project-name>')
  )
  process.exit(1);
}

createApp(projectName);
