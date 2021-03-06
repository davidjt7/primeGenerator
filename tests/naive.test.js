const { isPrimeNaive, getPrimes } = require("../primeGenerator.js");

test("returns primes from 2 to 10 as [2, 3, 5, 7]", () => {
  expect(getPrimes(2, 10, isPrimeNaive)).toStrictEqual([2, 3, 5, 7]);
});
