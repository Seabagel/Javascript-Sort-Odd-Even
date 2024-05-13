function customSort1(arr) {
    // Your custom sorting logic here
    let odd = [];
    let even = [];
    arr.forEach((num, index) => {
        if (index % 2 !== 0) {
            let i = odd.length - 1;
            while (i >= 0 && num < odd[i]) {
                odd[i + 1] = odd[i];
                i--;
            }
            odd[i + 1] = num;
        } else {
            let i = even.length - 1;
            while (i >= 0 && num < even[i]) {
                even[i + 1] = even[i];
                i--;
            }
            even[i + 1] = num;
        }
    });
    let result = even.concat(odd);
    return result;
}

function customSort2(arr) {
    let odd = [];
    let even = [];
    arr.forEach((num, index) => {
        if (index % 2 !== 0) {
            let i = odd.length - 1;
            while (i >= 0 && num < odd[i]) {
                odd[i + 1] = odd[i];
                i--;
            }
            odd[i + 1] = num;
        } else {
            let i = even.length - 1;
            while (i >= 0 && num < even[i]) {
                even[i + 1] = even[i];
                i--;
            }
            even[i + 1] = num;
        }
    });
    // Combine even and odd arrays without using concat
    let result = [];
    let evenIndex = 0;
    let oddIndex = 0;
    while (evenIndex < even.length && oddIndex < odd.length) {
        if (even[evenIndex] < odd[oddIndex]) {
            result.push(even[evenIndex]);
            evenIndex++;
        } else {
            result.push(odd[oddIndex]);
            oddIndex++;
        }
    }
    // Add remaining elements from even and odd arrays
    while (evenIndex < even.length) {
        result.push(even[evenIndex]);
        evenIndex++;
    }
    while (oddIndex < odd.length) {
        result.push(odd[oddIndex]);
        oddIndex++;
    }
    return result;
}


// Function to generate a random array
function generateRandomArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * size));
    }
    return arr;
}

function customSort3(arr) {
    let result = []; // Combined sorted array

    // Split odd and even numbers while combining them into a sorted array
    arr.forEach((num, index) => {
        if (index % 2 !== 0) { // Odd index
            // Insert num into the result array in sorted order
            let i = result.length - 1;
            while (i >= 0 && num < result[i]) {
                result[i + 1] = result[i];
                i--;
            }
            result[i + 1] = num;
        } else { // Even index
            // Insert num into the result array in sorted order
            let i = result.length - 1;
            while (i >= 0 && num < result[i]) {
                result[i + 1] = result[i];
                i--;
            }
            result[i + 1] = num;
        }
    });

    return result;
}

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Benchmark function
function benchmark(sortFunction, arr) {
    let start = performance.now();
    sortFunction(arr);
    let end = performance.now();
    return end - start;
}

// Example usage:
let arrSize = 10000; // Adjust array size as needed
let arr = generateRandomArray(arrSize);

// Benchmark built-in sort
let bubbleSortTime = benchmark(bubbleSort, arr);
console.log(`Bubble sort took ${bubbleSortTime} milliseconds`);

// Benchmark built-in sort
let builtInSortTime = benchmark(arr => arr.sort((a, b) => a - b), arr);
console.log(`Built-in sort took ${builtInSortTime} milliseconds`);

// Benchmark custom sort 1
let customSortTime1 = benchmark(customSort1, arr);
console.log(`Custom sort #1 took ${customSortTime1} milliseconds`);

// Benchmark custom sort 2
let customSortTime2 = benchmark(customSort2, arr);
console.log(`Custom sort #2 took ${customSortTime2} milliseconds`);

// Benchmark custom sort 3
let customSortTime3 = benchmark(customSort3, arr);
console.log(`Custom sort #3 took ${customSortTime3} milliseconds`);

