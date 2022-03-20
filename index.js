#!/usr/bin/env node
const commandLineArgs = require('command-line-args')
const { exec } = require("child_process");
const fse = require('fs-extra');
const path = require('path');

const optionDefinitions = [
    { name: 'src', type: String, multiple: false, defaultOption: true },
    { name: 'typescript', type: Boolean },
    { name: 'storage', alias: 's', type: String }
]

const {src, typescript, storage} = commandLineArgs(optionDefinitions)

const typePath = typescript ? 'typescript' : 'javascript';
const storagePath = storage ? storage : 'default';

const loadPath = path.join(__dirname, typePath, storagePath);
const savePath = path.join(process.cwd(), src);

fse.copySync(loadPath, savePath);

exec(`cd ${savePath} && npm install`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
});