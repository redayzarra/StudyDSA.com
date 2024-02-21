export const hashFunctionCode = 
`def simple_hash(key: str, table_size: int) -> int:
    """
    An example of a simple hash function for strings.
    
    :param key: The key to hash.
    :param table_size: The size of the hash table.
    :return: The hash value of the key, to be used as an index.
    """
    hash_val = 0
    for char in key:
        hash_val = (hash_val * 31 + ord(char)) % table_size
    return hash_val`;

export const collisionsCode = 
`# Simple hash function that will intentionally cause collisions
def simple_hash(key: str, size: int) -> int:
    return len(key) % size
    
# Providing two different keys that will intentionally cause a collision
key1 = "hello"
key2 = "world"

size = 10

# Calculating hash values for both keys to demonstrate a collision
hash_value1 = simple_hash(key1, size)
hash_value2 = simple_hash(key2, size)

print(hash_value1, hash_value2)

# Output: (5, 5)`;