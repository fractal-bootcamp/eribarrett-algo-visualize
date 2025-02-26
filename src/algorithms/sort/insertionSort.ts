// insertion sort
// moves elements one by one to the correct position 

// the list is divided into two parts: sorted, unsorted
// the min is sorted and moved to the end of the sorted list
// the unsorted list is reduced by one element 
// process repeats until the unsorted is empty

type ArrayNeedsSort = number[];

export function insertionSort(arr: ArrayNeedsSort): ArrayNeedsSort {
    const sorted = [...arr];
    const n = sorted.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (sorted[j] < sorted[minIndex]) {
                minIndex = j;
            }
        }

        // swap new min element found w element at pos i
        if (minIndex !== i) {
            [sorted[i], sorted[minIndex]] = [sorted[minIndex], sorted[i]]
        }
    }
    return sorted;
}

const unsortedArray: ArrayNeedsSort = [62, 97, 88, 44, 57, 12, 123, 89, 1, 7];
const sortedArray = insertionSort(unsortedArray);

console.log(sortedArray);