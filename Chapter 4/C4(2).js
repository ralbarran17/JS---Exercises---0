//Create a function that will recursively go through all of the elements of an array of numbers and add them.

function findSum(A, N) {
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
  }
  
  let A = [1, 2, 3, 4, 5];
  let N = A.length;
  console.log(findSum(A, N));