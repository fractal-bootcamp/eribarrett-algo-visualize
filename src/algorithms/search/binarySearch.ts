// Binary Search

// takes in a sorted array of numbers, and a target number
// returns the index of the target number
// if the number is not found, returns null

type BinarySearchState = {
    array: number[],
    target: number,
    left: number,
    right: number,
    middle: number
}

// this can only run for INT_MAX iterations (2,147,468)
// use a for loop, not a while loop
// if you do not find the result in INT_MAX iterations of binary search
// return null or some error that helps the program correct itself from failure.
export function binarySearch(arr: number[], target: number): number | null {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) { //floor returns the largest int <= a given number
        const middle = Math.floor((right + left) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            left = middle + 1; // left half is discarded
        } else {
            right = middle - 1; // right half is discarded
        }
    }
    return null;
}

// FIND THE POSITION OF TARGET IN ARR
function recursiveBinarySearch(arr: number[], target: number): number | null {
    const mid = Math.floor(arr.length / 2);

    if (arr.length === 0) return null
    if (arr[mid] === target) return mid
    if (target < arr[mid]) return recursiveBinarySearch(arr.slice(0, mid), target);
    if (target > arr[mid]) return recursiveBinarySearch(arr.slice(mid + 1), target);

    return null;
}

// Test array and search
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Testing binary search with array:", testArray);
console.log("Searching for 7:", binarySearch(testArray, 7)); // Should return 6
console.log("Searching for 3:", binarySearch(testArray, 3)); // Should return 2
console.log("Searching for 11:", binarySearch(testArray, 11)); // Should return null

// Test recursive binary search
console.log("\nTesting recursive binary search:");
console.log("Searching for 7:", recursiveBinarySearch(testArray, 7)); // Should return 6
console.log("Searching for 3:", recursiveBinarySearch(testArray, 3)); // Should return 2
console.log("Searching for 11:", recursiveBinarySearch(testArray, 11)); // Should return null
