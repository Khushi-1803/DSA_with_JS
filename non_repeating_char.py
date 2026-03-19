"""Given a string s consisting of lowercase English Letters. return the first non-repeating character in s. If there is no non-repeating character, return '$'."""

text = "hello world"
char_count = {}

for char in text:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1

# print characters that appear once
for char in char_count:
    if char_count[char] == 1:
        print(char, char_count[char])
