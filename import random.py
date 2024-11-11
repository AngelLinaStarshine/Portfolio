import random                   
from sympy import isprime        
import hashlib                   

def num_gen(n, prime=True):
    return [p for p in range(2, n) if isprime(p)] if prime else [x for x in range(4, n) if not isprime(x)]

def hash(numbers):
    concatenated = ''.join(map(str, numbers)).encode()  # Convert numbers to string and encode
    return hashlib.sha256(concatenated).hexdigest()     # Return the SHA-256 hash as a hex string

def hash_gen(prime_numbers):
    hash_set = {}
    print("16 valid messages:")
    for _ in range(16):  # 16 sets of prime numbers
        p_num1, p_num2, p_num3 = random.sample(prime_numbers, 3) 
        hash_value = hash([p_num1, p_num2, p_num3])                
        hash_set[hash_value] = (p_num1, p_num2, p_num3)           
        print(f"({p_num1}, {p_num2}, {p_num3}) || {hash_value}")   
    return hash_set

def collision(hash_set, composite_numbers):
    print("\nLooking for a fraudulent message that matches a valid message's hash...")
    attempts = 0
    collision_found = False

    while not collision_found and attempts < 1000:  
        c1, c2, c3 = random.sample(composite_numbers, 3)
        composite_hash = hash([c1, c2, c3])                 
        attempts += 1

        if composite_hash in hash_set:                  
            collision_found = True
            print(f"Collision found after {attempts} attempts:")
            print(f"Composite set: ({c1}, {c2}, {c3}) || {composite_hash}") 
            print(f"Original set: {hash_set[composite_hash]} || {composite_hash}")

    if not collision_found:
        print("No collision found after 1000 attempts.") 

def main():
    n = 256 
    prime_numbers = num_gen(n, prime=True)           
    composite_numbers = num_gen(n, prime=False)      
    hash_set = hash_gen(prime_numbers)                
    collision(hash_set, composite_numbers)           

if __name__ == "__main__":
    main()  