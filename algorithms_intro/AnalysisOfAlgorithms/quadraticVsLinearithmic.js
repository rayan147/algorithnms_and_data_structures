const n = 1_000_000;
const nquares = n ** 2;
const log2n =n * Math.log2(n);
const results = nquares / log2n;
console.log(results);