const { sieveOfEratosthenes } = require("../primeGenerator.js");

test("returns primes from 2 to 10 as [2, 3, 5, 7]", () => {
  expect(sieveOfEratosthenes(2, 10)).toStrictEqual([2, 3, 5, 7]);
});
