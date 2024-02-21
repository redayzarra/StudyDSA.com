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

export const insertChainingCode = 
`# A simple hash function based on hashmap size of 5, for demonstration
def simple_hash(key: str):
    return len(key) % 5

# Let's make our hashmap a list of lists: five arrays inside one larger array
hashmap = [[]] * 5 

# Insert function: Adds a key-value pair to the appropriate list
def insert(key, value):
    # 1. Calculate the index using the hash function
    index = simple_hash(key)

    # 2. If a key already exists, update the value
    for item in hashmap[index]:
        if item[0] == key:
            item[1] = value
            return

    # 3. If the key doesn't exist, add new key-value pair
    hashmap[index].append([key, value])`;

export const deleteChainingCode = 
`# Get function: Retrieves the value for a given key
def get(key: str):
    index = simple_hash(key)
    for item in hash_table[index]:
        if item[0] == key:
            return item[1]
    return None  # If the key is not found

# Delete function: Removes a key-value pair
def delete(key: str):
    index = simple_hash(key)
    for i, item in enumerate(hash_table[index]):
        if item[0] == key:
            del hash_table[index][i]
            return`;

export const openAddressingCode = 
`# A simple hash function to hash the keys into indices
def simple_hash(key: str, size: int) -> int:
    return len(key) % size
    
def linear_probe(hashmap: List[List[int]], key: str, value: int, size: int):
    # 1. Use hash function to get the initial hash value/index
    hashVal = simple_hash(key, size)
    index = hashVal 
    
    # 2. Loop to find an empty slot when a collision occurs
    while hashmap[index] is not None:
        # Important: Wrap around to the start if we reach the end of the table
        index = (index + 1) % size
        
        # If we are back to where we started, the table is full
        if index == hashVal:
            print("The table is full, no empty slot found!")
    
    # Once an empty slot is found, insert the key-value pair at the current index
    hashmap[index] = (key, value)
    print("Added a new key-val pair to empty slot!")`;