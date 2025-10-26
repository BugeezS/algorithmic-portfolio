/*
    Concept Recap
    An algorithm is O(1) if its execution time is constant -- it does the same amount of work no matter how large the input is.
    Exemple:

    function getFirstElement(arr) {
        return arr[0];
    }

    Even if arr has 10 or 100000 elements, this always takes one step.
*/

//Exercice 1 : Access by Index

function returnLastIndexElements(arr: string[]) {
    if(arr.length === 0) return undefined;
    const index = arr.length - 1;
    return arr[index];
}