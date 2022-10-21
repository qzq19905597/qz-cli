#!/usr/bin/env node
const { program } = require('commander')
const download = require('download-git-repo')
// const ora = require('ora')
//设置版本
program.version('1.0.0')
// const spinner = ora('downloading...')
program.command('init <name>').description('init a project').option('-t, --type <type>','type of the project to init').action((name, opts)=>{
  console.log(name, opts.type);
  download('direct:https://github.com/qzq19905597/react-redux-ts-redux-tookit.git', `./${name}`, { clone: true }, (err)=>{
    if(err){
      // spinner.fail()
      console.log(err);
      return
    }
    // spinner.succeed()
    
  })
})
program.parse(process.argv)
