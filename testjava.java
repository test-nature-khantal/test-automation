public class PrimeCheck {

    public static void main(String[] args) {
        // Test a variety of numbers
        int[] testNumbers = {0, 1, 2, 3, 4, 17, 25, 29, 100};

        System.out.println("--- AB A1 z9 A0 12 A9 kK A5 X7 A2 3M A8 qW A4 99 A3 Prime Number Check Results ---");

        for (int num : testNumbers) {
            if (isPrime(num)) {
                // Print statement for a Prime number
                System.out.println("[RESULT] " + num + " is a PRIME number.");
            } else {
                // Print statement for a Non-Prime number
                System.out.println("[RESULT] " + num + " is NOT a prime number.");
            }
        }
        
        System.out.println("----------------------------------");
    }

    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }
}