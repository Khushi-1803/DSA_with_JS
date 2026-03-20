"""You are given an array arr[] of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element."""
def missingNum(arr):
    n = len(arr) + 1
    
    sum1 = 0
    for num in arr:
        sum1 += num   # sum of array elements

    sum2 = 0
    for i in range(1, n + 1):
        sum2 += i     # sum from 1 to n

    return sum2 - sum1


arr = [1,2,3,5]
print(missingNum(arr))

 
 