"""Given a string s, which may contain duplicate characters, your task is to generate and return an array of all unique permutations of the string. You can return your answer in any order.

Examples:

Input: s = "ABC"
Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
Explanation: Given string ABC has 6 unique permutations."""


"""import math
s = "ABC"
n=len(s)
r=len(s)
dr=n-r
def factorial(num):
    fact=1
    for i in range(1,1+num):
        fact=fact*i
    return fact
result = math.floor(factorial(n)/factorial(dr))
print(result)"""

result = []
def permutation(data,i,n):
    if i==n:
        result.append("".join(data))
    for j in range(i,n+1):
        data[i],data[j]=data[j],data[i]
        permutation(data,i+1,n)
        data[i],data[j]=data[j],data[i]
data=list("ABC")
i=0
n=len(data)-1
permutation(data,i,n)
print(result)
