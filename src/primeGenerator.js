const isPrimeNaive = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const isPrimeOptimized = (n) => {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }

  for (let i = 5; i * i < n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
};

const getPrimes = (start, end, primeCheck) => {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (primeCheck(i)) {
      primes.push(i);
    }
  }
  return primes;
};

const sieveOfEratosthenes = (start, end) => {
  const primes = [];
  const prime = [];
  if (start < 2) {
    start = 2;
  }

  for (let i = 0; i < end + 1; ++i) {
    prime[i] = true;
  }

  for (let p = 2; p * p <= end; p++) {
    if (prime[p] == true) {
      for (let i = p * p; i <= end; i += p) {
        prime[i] = false;
      }
    }
  }

  for (let p = start; p <= end; p++) {
    if (prime[p]) {
      primes.push(p);
    }
  }
  return primes;
};

module.exports = {
  getPrimes,
  isPrimeNaive,
  isPrimeOptimized,
  sieveOfEratosthenes,
};
