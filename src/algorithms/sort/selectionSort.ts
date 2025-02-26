// selection sort 
// works by finding the min val in an unsorted array and moving it to the beginning

type ArrayNeedsSort = number[];
type MinIndex = number;

export function selectionSort(arr: ArrayNeedsSort): ArrayNeedsSort {
    const n = arr.length;

    for (let i = 0; i <= n - 1; i++) {
        let minIndex: MinIndex = i;
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[j]! < arr[minIndex]!) {
                // swap j with minIndex
                [arr[j], arr[minIndex]] = [arr[minIndex]!, arr[j]!];
            }
        }
    }
    return arr;
}

// test

const unsortedArray: ArrayNeedsSort = [62, 97, 88, 44, 57, 12, 123, 89, 1, 7];
const sortedArray = selectionSort(unsortedArray);

console.log(sortedArray);