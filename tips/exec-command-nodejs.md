---
title: "Exec Command in Node.Js"
language: "Javascript"
twitter: "avishekp86"
---
//Use 'exec' method of 'child_process' to execute any shell commands 
//from a NodeJs Script. 

const {exec} = require('child_process');

exec("npm install -D typescript", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});



exec("npx tsc --init", (error, stdout, stderr) => {
    if(error){
        console.log(`error: ${error.message}`);
        return;
    }
    if(stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});