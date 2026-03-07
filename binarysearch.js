let arr = [1,2,3,4,5,6,7,8]
function binarySearch(arr, tar) {
    let F = 0;
    let l = arr.length - 1;

    while (F <= l) {
        let mid = Math.floor(F+(l-F) / 2);
        if (arr[mid] === tar) {
            return mid;
        } else if (arr[mid] < tar) {
            F = mid + 1;
        } else {
            l = mid - 1;
        }
    }

    return -1; // not found
}

console.log(binarySearch(arr, 6));

