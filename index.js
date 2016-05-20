#! /usr/bin/env node

//console.log('This is the filesearch script.');
//console.log(process.argv);

var input = process.argv.slice(2);
var searchTerm = input[0];

var exec = require('child_process').exec;
var child = exec('ls -a | grep ' + searchTerm, function(err, stdout, stderr) {
  console.log(stdout);
});

