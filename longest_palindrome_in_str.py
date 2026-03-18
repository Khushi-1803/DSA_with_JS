"""Given a string s, your task is to find the longest palindromic substring within s.

A substring is a contiguous sequence of characters within a string, defined as s[i...j] where 0 ≤ i ≤ j < len(s).

A palindrome is a string that reads the same forward and backward. More formally, s is a palindrome if reverse(s) == s.

Note: If there are multiple palindromic substrings with the same length, return the first occurrence of the longest palindromic substring from left to right."""


s = "forgeeksskeegfor"

def expand(left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1
    return left + 1, right - 1   # correct boundaries

start = 0
max_len = 0

for i in range(len(s)):
    # Odd length palindrome
    l1, r1 = expand(i, i)
    
    # Even length palindrome
    l2, r2 = expand(i, i + 1)
    
    # Check odd length
    if (r1 - l1 + 1) > max_len:
        start = l1
        max_len = r1 - l1 + 1
    
    # Check even length
    if (r2 - l2 + 1) > max_len:
        start = l2
        max_len = r2 - l2 + 1

# Final result
result = s[start:start + max_len]
print(result)

   
