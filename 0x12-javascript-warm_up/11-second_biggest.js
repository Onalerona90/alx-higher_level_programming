#!/usr/bin/node
const args = process.argv.slice(2).map(Number);

if (args.length === 0 || args.length === 1) {
  console.log(0);
} else {
  const sorted = args.sort();
  console.log(sorted[sorted.length - 2]);
}
