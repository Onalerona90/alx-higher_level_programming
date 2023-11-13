3-value_argument.js
#!/usr/bin/node
if (process.argv[2] === undefined) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
