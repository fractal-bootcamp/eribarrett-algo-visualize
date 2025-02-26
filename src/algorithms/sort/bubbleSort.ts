/// bubble  sort 
// works by repeatedly swapping the adjacent elements if they are in wrong order

type ArrayNeedsSort = number[];



export function bubbleSort(arr: ArrayNeedsSort): ArrayNeedsSort {
    const n = arr.length;

    for (let i = 0; i <= n - 1; i++) { // loop thru array, aka how many passes? 
        for (let j = 0; j <= n - i - 1; j++) { // loop thru array, aka how many comparisons?
            if (arr[j] > arr[j + 1]) {
                // make swap 
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

// test

const unsortedArray: ArrayNeedsSort = [62, 97, 8, 14, 26, 19, 137, 89, 100];
const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray);

