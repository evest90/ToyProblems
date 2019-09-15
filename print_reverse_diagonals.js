const printMinorDiagonals = matrix => {
  for (let i = 0; i < matrix.length; i++) { 
    let col = matrix.length - 1 - i; 
    let row = 0; 
    while (col < matrix.length) {
      console.log(matrix[row][col]); 
      col++;
      row++;
    }
  }
  for (let i = 1; i < matrix.length; i++) { 
    let col = 0; 
    let row = i; 
    while (row < matrix.length) {
      console.log(matrix[row][col]); 
      row++;
      col++;
    }
  }
  return;
}

const threeByThree = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const fourByFour = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const fiveByFive = [
  [1,  2,  3,  4,   5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

printMinorDiagonals(threeByThree);
printMinorDiagonals(fourByFour);
printMinorDiagonals(fiveByFive);