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
hashmap = [[] for i in range(5)]

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
def get(key: str) -> int:
    index = simple_hash(key)
    for item in hash_table[index]:
        if item[0] == key:
            return item[1]
    return None  # If the key is not found

# Delete function: Removes a key-value pair
def delete(key: str) -> None:
    index = simple_hash(key)
    # Rebuild the bucket without the item we want to delete
    hash_table[index] = [item for item in hash_table[index] if item[0] != key]`;

export const openAddressingCode = 
`# A simple hash function to hash the keys into indices
def simple_hash(key: str, size: int) -> int:
    return len(key) % size
    
def linear_probe(hashmap, key: str, value: int, size: int) -> bool:
    hashVal = simple_hash(key, size)
    index = hashVal
    
    while hashmap[index] is not None:
        index = (index + 1) % size
        if index == hashVal:  # If we've looped all the way around, table is full
            print("The table is full, no empty slot found!")
            return False
    
    hashmap[index] = (key, value)
    print("Added a new key-value pair to empty slot!")
    return True`;

export const chainingHashmap = 
`# Implement a hashmap with chaining
class ChainingHashMap:

    # Initialize the hashmap with size 10
    def __init__(self, size: int = 10):
        self.hashmap = [[] for i in range(size)]
    
    # Simple hash function: ensures index is within hashmap bounds
    def simple_hash(self, key: str) -> int:
        return len(key) % len(self.hashmap)
    
    # Insert: If the key exists, update it. Or else, add a new key-val pair
    def insert(self, key: str, value: int) -> None:
        index = self.simple_hash(key)
        for item in self.hashmap[index]:
            if item[0] == key:
                item[1] = value
                return
        self.hashmap[index].append([key, value])
    
    # Get: Retrieve the value for a given key
    def get(self, key: str) -> Optional[int]:
        index = self.simple_hash(key)
        for item in self.hashmap[index]:
            if item[0] == key:
                return item[1]
        return None
    
    # Delete: Remove a value for a given key, leave the rest alone
    def delete(self, key: str) -> None:
        index = self.simple_hash(key)
        self.hashmap[index] = [item for item in self.hashmap[index] if item[0] != key]`;
    
export const openAddressingHashmap = 
`# Linear probing - looks for the next available slot (linearly)
class LinearProbingHashMap:

    # Initialize the hashmap with size 10
    def __init__(self, size: int = 10):
        self.hashmap = [None] * size
    
    # Simple hash function (index will never be greater than table size)
    def simple_hash(self, key: str) -> int:
        return len(key) % len(self.hashmap)
    
    # Find available slot for a new key-value pair
    def find_slot(self, key: str) -> int:
        index = self.simple_hash(key)
        start_index = index
        while self.hashmap[index] is not None and self.hashmap[index][0] != key:
            index = (index + 1) % len(self.hashmap)
            if index == start_index:
                raise Exception("No empty slots left. Hashmap is full!")
        return index
    
    # Insert: Add new key-val pair at an empty slot
    def insert(self, key, value) -> None:
        index = self.find_slot(key)
        self.hashmap[index] = (key, value)
    
    # Get: Retrieve the value from a given key
    def get(self, key: str) -> int:
        index = self.find_slot(key)
        if self.hashmap[index] is None:
            return None
        return self.hashmap[index][1]
    
    # Delete: Remove the value from a given key
    def delete(self, key: str) -> None:
        index = self.find_slot(key)
        if self.hashmap[index] is not None:
            self.hashmap[index] = None`;