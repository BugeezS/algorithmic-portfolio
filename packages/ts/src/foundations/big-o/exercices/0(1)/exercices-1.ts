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

function returnLastIndexElements(arr: string[]) : string | undefined {
    if(arr.length === 0) return undefined;
    const index = arr.length - 1;
    return arr[index];
}

//Exercice 2 : Fixed Number of Operations

function swapTheFirstTwoElements(arr: number[]) : number[] | undefined{
    if(arr.length < 2) return undefined;

    const firsIndex = arr[0]!;
    const secondIndex = arr[1]!;
    
    arr[0] = secondIndex;
    arr[1] = firsIndex;

    return arr;
}

//Exercice 3 : Simple Dictionary Access 

type User = {
    name: string;
    age: number;
}

function getUserAge(user: User) : number {
    return user.age;
}

//Exercice 4 : Push & Pop (from End)

function push(arr: number[], input: number){
    arr.push(input);
}

function pop(arr: number[]) {
    arr.pop();
}