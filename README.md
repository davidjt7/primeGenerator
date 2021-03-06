## Generate prime numbers
3 strategies
- Naive (O(n^2)) -> naive
- Optimized (O(n^3/2)) -> opt
- Eratosthenes' sieve (O(n*log(log(n)))) -> best

## Run in the console
Examples:
```
gen-primes 1 10 naive
->[ 2, 3, 5, 7 ]
```
```
gen-primes 1 10 opt
->[ 2, 3, 5, 7 ]
```
```
gen-primes 1 10 best
->[ 2, 3, 5, 7 ]
```