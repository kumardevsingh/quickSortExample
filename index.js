
//let array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

//let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array = [1, 2, 3, 4, -5, 6, 7, 8, 9, -10];

function quickSort(array) {
    if (array.length === 1) {
        return array;
    }


    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (const el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArray.push(el) : rightArray.push(el);
    }

    /* for (let i = 0; i < array.length - 1; i++) {

        if (array[i] < pivot) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    } */


    if (leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];

    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot];

    } else {
        return [pivot, ...quickSort(rightArray)]

    }

}

const sortedArr = quickSort(array);


console.log(sortedArr);

