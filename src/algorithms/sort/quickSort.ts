

type QuickSortState = {
    original: number[],
    lessThan: number[],
    pivot: number,
    greaterThan: number[]
}

type QuickSortNode = {
    arr: number[]
    pivot: number
    lessThan: number[]
    greaterThan: number[]
}

const sortHistory: QuickSortNode[] = []

//take in an array of numbers, return a sorted array
function quickSort(arr: number[], callback? (state: QuickSortState) => void): number[] {

    return arr
}
// 1. choose a pivot, remove it from the array
// can safetly typecast as number, because we check to see if the array ecists.
const pivot = arr.pop() as number

const lessThan: number[] = []
const greaterThan: number[] = []

//2. fo through remaining elements, divinsing them into LESS THAN, GREATER THAN
arr.forEach((e) => {
    if (e > pivot) {
        greaterThan.push(e)
        return
    }
    if (e < pivot) {
        lessThan.push(e)
        return
    }

})

call

//3. return less than, pivot, and greater than
return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]


const testArray = [5, 2, 9, 1, 3, 6, 4, 8, 7

        function myCallback(state: QuickSortState) {
        sortHistory.push()
    ]
 }


