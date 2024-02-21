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