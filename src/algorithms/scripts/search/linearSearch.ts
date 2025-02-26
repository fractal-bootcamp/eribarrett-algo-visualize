// Linear Search

// takes in an array of numbers, and a target number
// returns the index of the target number
// if the target number is not found, 



export function linearSearch(arr: number[], target: number): number | null {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return null
}





