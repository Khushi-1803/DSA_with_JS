"""Given a string s, reverse the string without reversing its individual words. Words are separated by dots(.).

Note: The string may contain leading or trailing dots(.) or multiple dots(.) between two words. The returned string should only have a single dot(.) separating the words, and no extra dots should be included."""

s = "i.like.this.program.very.much"
# spliting into words by .
parts=s.split(".")
words = [words for words in parts if words]
words.reverse()
res=".".join(words)
print(res)