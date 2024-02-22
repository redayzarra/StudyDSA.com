export const hashFunctionCode = 
`# Hash function: Convert key into index that is within hashmap
def simple_hash(key: str, table_size: int) -> int:
    # Ensure index is within hashmap bounds
    return len(key) % size`;

export const collisionsCode = 
`def simple_hash(key: str, size: int) -> int:
    # Ensure index is within hashmap bounds
    return len(key) % size
    
# Providing input keys and size that will intentionally cause a collision
key1 = "hello"
key2 = "world"
size = 10

# Calculating hash values for both keys to demonstrate a collision
hash_value1 = simple_hash(key1, size)
hash_value2 = simple_hash(key2, size)

print(hash_value1, hash_value2) # Output: (5, 5)`;

export const insertChainingCode = 
`def simple_hash(key: str, size: int) -> int:
    # Ensure index is within hashmap bounds
    return len(key) % size

# Insert: Update a key-val pair, or add it if it doesn't exist
def insert(self, key: str, value: int) -> None:
        # 1. Get the index from hashed key
        index = self.simple_hash(key)
        # 2. Find the key and update it's value
        for item in self.hashmap[index]:
            if item[0] == key:
                item[1] = value
                return
        # 3. If a key doesn't exist, add a new key-val pair
        self.hashmap[index].append([key, value])`;

export const deleteChainingCode = 
`# Get: Retrieve the value from a given key
def get(self, key: str) -> Optional[int]:
    # 1. Get the index from hashed key
    index = self.simple_hash(key)
    # 2. Find the key and return it's value
    for item in self.hashmap[index]:
        if item[0] == key:
            return item[1]
    # 3. If the key doesn't exist, return null
    return None

# Delete: Remove the value from a given key
def delete(self, key: str) -> None:
    # 1. Find the index from hashed key
    index = self.simple_hash(key)
    # 2. Keep all the items except for the key we want to delete
    self.hashmap[index] = [item for item in self.hashmap[index] if item[0] != key]`;

export const openAddressingCode = 
`def simple_hash(key: str, size: int) -> int:
    return len(key) % size

# Linear Probing: Find the next available slot by going down the hashmap one-by-one
def find_slot(self, key: str) -> int:
    # 1. Find the index from hashed key and store starting index
    index = self.simple_hash(key)
    start_index = index
    # 2. Find an empty slot or one containing the key
    while self.hashmap[index] is not None and self.hashmap[index][0] != key:
        index = (index + 1) % len(self.hashmap)
        if index == start_index:
            raise Exception("No empty slots left. Hashmap is full!")
    # 3. If everything goes well, return the index
    return index`;

export const chainingHashmap = 
`# Implement a hashmap with chaining
class ChainingHashMap:

    def __init__(self, size: int = 10):
        # Initialize the hashmap as list of lists 
        self.hashmap = [[] for i in range(size)]
    
    def simple_hash(self, key: str) -> int:
        # Ensure index is within hashmap bounds
        return len(key) % len(self.hashmap)
    
    def insert(self, key: str, value: int) -> None:
        # 1. Get the index from hashed key
        index = self.simple_hash(key)
        # 2. Find the key and update it's value
        for item in self.hashmap[index]:
            if item[0] == key:
                item[1] = value
                return
        # 3. If a key doesn't exist, add a new key-val pair
        self.hashmap[index].append([key, value])
    
    def get(self, key: str) -> Optional[int]:
        # 1. Get the index from hashed key
        index = self.simple_hash(key)
        # 2. Find the key and return it's value
        for item in self.hashmap[index]:
            if item[0] == key:
                return item[1]
        # 3. If the key doesn't exist, return null
        return None
    
    def delete(self, key: str) -> None:
        # 1. Find the index from hashed key
        index = self.simple_hash(key)
        # 2. Keep all the items except for the key we want to delete
        self.hashmap[index] = [item for item in self.hashmap[index] if item[0] != key]`;
    
export const openAddressingHashmap = 
`# Linear probing - looks for the next available slot (linearly)
class LinearProbingHashMap:

    def __init__(self, size: int = 10):
        # Initialize as array of size 10 containing null values
        self.hashmap = [None] * size
    
    def simple_hash(self, key: str) -> int:
        # Ensure index is within hashmap bounds
        return len(key) % len(self.hashmap)
    
    def find_slot(self, key: str) -> int:
        # 1. Find the index from hashed key and store starting index
        index = self.simple_hash(key)
        start_index = index
        # 2. Find an empty slot or one containing the key
        while self.hashmap[index] is not None and self.hashmap[index][0] != key:
            index = (index + 1) % len(self.hashmap)
            if index == start_index:
                raise Exception("No empty slots left. Hashmap is full!")
        # 3. If everything goes well, return the index
        return index
    
    def insert(self, key, value) -> None:
        # Find the index with given key and update the key-val pair
        index = self.find_slot(key)
        self.hashmap[index] = (key, value)
    
    def get(self, key: str) -> int:
        # 1. Find the index with given key
        index = self.find_slot(key)
        if self.hashmap[index] is None:
            return None
        # 2. If there is a value there, return it
        return self.hashmap[index][1]
    
    def delete(self, key: str) -> None:
        # Find the index at given key and replace it with null
        index = self.find_slot(key)
        if self.hashmap[index] is not None:
            self.hashmap[index] = None`;

export const chainingWithLinked = 
`# ListNode class containing the key-val pair and next pointer
class ListNode:
    def __init__(self, key: str, val: int = 0, next = None):
        self.val = val
        self.next = next
    
class HashMap:

    def __init__(self, self: int = 10):
        # Initialize hashmap as array containing dummy ListNodes
        self.hashmap = [ListNode() for i in range(size)]

    def hash(self, key: str) -> int:
        # 1. Convert string key to integer for hashing
        hash_value = sum(ord(letter) for letter in key)
        # 2. Ensure index is within hashmap bounds
        return hash_value % len(self.hashmap)

    def insert(self, key: str, value: int) -> None:
        # 1. Set 'cur' to the head of the LinkedList 
        index = self.hash(key)
        cur = self.hashmap[index]
        # 2. Try to find the key, then update it's value
        while cur.next:
            if cur.next.key == key:
                cur.next.val = value
                return
            cur = cur.next
        # 2. If the key doesn't exist, create a new key-val pair
        cur.next = ListNode(key, value)

    def get(self, key: str) -> int:
        # 1. Set 'cur' to the second node of the LinkedList, skipping dummy node
        index = self.hash(key)
        cur = self.hashmap[index].next
        # 2. Try to find the key, then return it's value
        while cur:
            if cur.key == key:
                return cur.val
            cur = cur.next
        # 3. If you can't find the key, return -1
        return -1

    def delete(self, key: str) -> None:
        # 1. Set 'cur' to the head of the LinkedList 
        index = self.hash(key)
        cur = self.hashmap[index]
        # 2. If you find the key, cut it off from rest of linked list
        while cur and cur.next:
            if cur.next.key == key:
                cur.next = cur.next.next
                return
            cur = cur.next`;