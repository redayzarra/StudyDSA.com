// This would be your hashmap of problem titles and solutions
const problemSolutions = {
"Contains Duplicate": 
`class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False

# Time: O(n), Space: O(n)`,

"Valid Anagram": 
`class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        for letter in string.ascii_lowercase:
            if s.count(letter) != t.count(letter):
                return False
        
        return True

# Time: O(n), Space: O(1)`,

"Two Sum": 
`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for index, num in enumerate(nums):
            diff = target - num
            if diff in hashmap:
                return [index, hashmap[diff]]
            hashmap[num] = index

# Time: O(n), Space: O(n)`,

"Product of Array Except Self": 
`class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)
        
        prefix = 1
        for index in range(len(nums)):
            res[index] *= prefix
            prefix *= nums[index]
        
        postfix = 1
        for index in range(len(nums) - 1, -1, -1):
            res[index] *= postfix
            postfix *= nums[index]
        return res

# Time: O(n), Space: O(1)`,

"Group Anagrams": 
`class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = defaultdict(list)
        
        for word in strs:
            count = [0] * 26
            for letter in word:
                count[ord(letter) - ord("a")] += 1
            
            hashmap[tuple(count)].append(word)
        
        return list(hashmap.values())

# Time: O(n * k), where n is the number of strings and k is the maximum length of a string
# Space: O(n)`,
};

module.exports = problemSolutions;