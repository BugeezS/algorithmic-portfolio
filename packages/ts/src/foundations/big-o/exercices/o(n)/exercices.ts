// Exercice 1 : Write a function that takes an array and returns the sum of all his elements.

function sumArrayElements(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//Exercice 2 : Write a function that finds the maximum value in an array.

function findMaxValueInArray(arr: number[]) : number | undefined {
    if(!arr || arr.length === 0) return undefined;

    let max:number = 0;

    for (let i = 0 ; i < arr.length ; i ++) {
        
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
