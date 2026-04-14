console.log("Testing upload");  
console.log("BENGALURU12345 ,bengaluru54321 , Bengaluru08001 BEnGALurU99999 bENgaluRU10101 BENGALURU67890 Bengaluru11111",
        "bengaluru22222",
        "BENGALURU33333",
        "Bengaluru44444");  
/**
 * Checks if a number is prime.
 * @param {number} n - The number to check.
 * @returns {boolean} - Returns true if prime, false otherwise.
 */
function isPrime(n) {
    // 1. Numbers less than or equal to 1 are not prime
    if (n <= 1) return false;
    
    // 2. 2 and 3 are prime
    if (n <= 3) return true;

    // 3. Eliminate even numbers and multiples of 3
    if (n % 2 === 0 || n % 3 === 0) return false;

    // 4. Check divisors from 5 to sqrt(n)
    // All primes greater than 3 are in the form 6k ± 1
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

// ---
console.log(isPrime(11));  // true
console.log(isPrime(15));  // false
console.log(isPrime(2));   // true
console.log(isPrime(1));   // false
console.log(isPrime(97));  // true