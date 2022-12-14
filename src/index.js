#!/usr/bin/env node

import { modyTypes } from "./constants/index.mjs";

import inquirer  from 'inquirer';
import { program } from 'commander';
import download from 'download-git-repo'
import ora from 'ora'

//设置版本
program.version('1.0.0')
const spinner = ora('正在下载模板, 请稍后...')
program.command('init <name>').description('init a project').option('-t, --type <type>','type of the project to init').action((name, opts)=>{
  console.log(name, opts.type);

  const question = [
    {
        name: 'description',
        message: '请输入项目描述'
    },
    {
        name: 'author',
        message: '请输入项目作者',
        default: 'robot'
    },
    {
      name: 'type',
      type: 'list',
      message: '请输入项目模板',
      choices: [modyTypes.react, modyTypes.vue],
      default: modyTypes.react
    }
  ]
  inquirer.prompt(question).then((answers) => {
    console.log(answers) // 返回的结果
    spinner.start();
    download('direct:https://github.com/qzq19905597/react-redux-ts-redux-tookit.git#main', `./${name}`, { clone: true }, (err)=>{
      if(err){
        spinner.fail()
        console.log(err);
        return
      }
      spinner.succeed('下载完成')
    })
  })
})
program.parse(process.argv)
