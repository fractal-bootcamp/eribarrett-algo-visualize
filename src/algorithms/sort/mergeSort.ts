// merge sort 

// recursively breaks down an array into smaller subarrays until they are in their own
// then sorts them individually and merges them back together at the end 

type ArrayNeedsSort = number[];

export function mergeSort(arr: ArrayNeedsSort): ArrayNeedsSort {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    //return the merge of the sorted left and right arrays
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = []; //this line creates empty array to store sorted elements
    let leftIdx = 0;
    let rightIdx = 0;

    // compare elements from each array and merge in sorted order
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx]! <= right[rightIdx]!) {
            result.push(left[leftIdx]!);
            leftIdx++;
        } else {
            result.push(right[rightIdx]!);
            rightIdx++;
        }
    }

    // add remaining elements from left & right arrays

    //left
    while (leftIdx < left.length) {
        result.push(left[leftIdx]!);
        leftIdx++;
    }

    //right 
    while (rightIdx < right.length) {
        result.push(right[rightIdx]!);
        rightIdx++;
    }

    return result;
}

// test

const unsortedArray: ArrayNeedsSort = [62, 97, 88, 44, 57, 12, 123, 89, 1, 7];
const sortedArray = mergeSort(unsortedArray);

console.log(sortedArray);
