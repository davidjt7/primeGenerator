#! /usr/bin/env node
const { getPrimes, isPrimeNaive, isPrimeOptimized, sieveOfEratosthenes } = require('./primeGenerator');

if (!(process.argv[2] && process.argv[3] && process.argv[4])) {
  console.log(
    "\x1b[33m%s\x1b[30m\x1b[0m",
    "Provide start, end and strategy as arguments"
  );
  return -1;
}

const start = parseInt(process.argv[2]);
const end = parseInt(process.argv[3]);
const strategy = process.argv[4];

switch (strategy) {
  case "naive":
    console.log(getPrimes(start, end, isPrimeNaive));
    break;
  case "opt":
    console.log(getPrimes(start, end, isPrimeOptimized));
    break;
  case "best":
    console.log(sieveOfEratosthenes(start, end));
    break;
  default:
    console.log("Invalid strategy");
}

return 0;
