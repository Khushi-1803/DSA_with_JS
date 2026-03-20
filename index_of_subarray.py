"""Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.

Note: If no such array is possible then, return [-1]."""

def subarraySum(arr,target):
    start=0
    curr=0
    for i in range(len(arr)):
        curr += arr[i]

        while curr > target and start <= i:
            curr -= arr[start]
            start += 1

        if curr == target:
            return [start + 1, i + 1]

    return [-1]
arr=[1,2,3,7,5]
target=12
print(subarraySum(arr,target))

    
  
 