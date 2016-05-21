#! /usr/bin/env node

var input = process.argv.slice(2);
var searchTerm = input[0];

var exec = require('child_process').exec;
var child = exec('grep -Hrn ' + searchTerm + ' .', function(err, stdout, stderr) {
  console.log(stdout);
});
