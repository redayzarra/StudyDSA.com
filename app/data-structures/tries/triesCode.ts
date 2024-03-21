export const trieNodeCode = 
`# Definition of a Trie Node
class TrieNode: 
    def __init__(self):
        self.children = {}
        self.isWord = False`;

export const insertionCode = 
`# Definition of a Trie Node
class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False

class Trie:
    # Setup root node 
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        # Starting from the root, iterate through the word
        cur = self.root
        for char in word:
            # If we haven't seen the letter before, add it to Trie
            if char not in cur.children:
                cur.children[char] = TrieNode()
            # Increment cur to the next letter
            cur = cur.children[char]
        # Once we are at the end of the word, mark that node as the end
        cur.isWord = True`;

export const searchingCode = 
`# Definition of a Trie Node
class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False

class Trie:
    # Setup root node 
    def __init__(self):
        self.root = TrieNode()

    def search(self, word: str) -> bool:
        # Starting from the root, iterate through the word
        cur = self.root
        for char in word:
            # If we haven't seen the letter before, return False
            if char not in cur.children:
                return False
            # Increment cur to the next letter
            cur = cur.children[char]
        # Check if the last node is the end of the word or not
        return cur.isWord`;

export const prefixCode = 
`# Definition of a Trie Node
class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False

class Trie:
    # Setup root node 
    def __init__(self):
        self.root = TrieNode()
        
    def findPrefix(self, prefix: str) -> bool:
        # Starting from the root, iterate through the word
        cur = self.root
        for char in prefix:
            # If we haven't seen the letter before, return False
            if char not in cur.children:
                return False
            cur = cur.children[char]
        # If we got to a valid node, a prefix exists so return True
        return True`;

export const trieCode = 
`# Definition of a Trie Node
class TrieNode: 
    def __init__(self):
        self.children = {}
        self.isWord = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        cur = self.root
        for char in word:
            if char not in cur.children:
                cur.children[char] = TrieNode()
            cur = cur.children[char]
        cur.isWord = True

    def search(self, word: str) -> bool:
        cur = self.root
        for char in word:
            if char not in cur.children:
                return False
            cur = cur.children[char]
        return cur.isWord

    def findPrefix(self, prefix: str) -> bool:
        cur = self.root
        for char in prefix:
            if char not in cur.children:
                return False
            cur = cur.children[char]
        return True


    def delete(self, word: str) -> bool:
        # DFS function to recursively delete word, pruning nodes
        def dfs(node: Optional[TrieNode], word: str, depth: int):
            # If we reached the end of the word...
            if depth == len(word):
                if not node.isWord:
                    return False  # Word not found.
                node.isWord = False
                return len(node.children) == 0  # If true, delete this node.

            char = word[depth]
            if char not in node.children:
                return False  # Word not found.

            shouldDeleteNode = dfs(node.children[char], word, depth + 1)

            if shouldDeleteNode:
                del node.children[char]
                return len(node.children) == 0 and not node.isWord

            return False

        return dfs(self.root, word, 0)`;