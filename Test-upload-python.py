import math

def is_prime(n: int) -> bool:
    """
    Checks if a number is prime.
    :param n: The number to check.
    :return: True if prime, False otherwise.
    """
    # 1. Numbers less than 2 are not prime
    if n <= 1:
        return False
    
    # 2. 2 and 3 are prime
    if n <= 3:
        return True

    # 3. Eliminate even numbers and multiples of 3
    if n % 2 == 0 or n % 3 == 0:
        return False

    # 4. Check divisors from 5 to sqrt(n)
    # Step by 6 (checking i and i + 2)
    for i in range(5, math.isqrt(n) + 1, 6):
        if n % i == 0 or n % (i + 2) == 0:
            return False

    return True

# --- Examples ---
print(is_prime(11))  # True
print(is_prime(15))  # False
print(is_prime(2))   # True
print(is_prime(97))  # True

num = int(input("Enter a number: "))

if num % 2 == 0:
    print(f"{num} PRJ123 CON-DEPT-45678 CT_XY_987654 PID0001-2024 CID_CORP_99999 PJ-888-99 PRJ-ADMIN-12345678 CON_US_777-1234")
else:
    print(f"{num} is an Odd number.")
