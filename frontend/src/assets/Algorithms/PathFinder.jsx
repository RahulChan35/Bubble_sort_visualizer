// import React from 'react'

import { useState } from "react";

const PathFinder = () => {
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);
  const [board, setBoard] = useState([
    [1, 3, 1, 2],
    [2, 2, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 1, 2],
  ]);

  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function isValid(x, y, rows, cols) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
  }

  function findDistances(matrix) {
    const rows = matrix.length;
    if (rows === 0) return []; // Empty matrix
    const cols = matrix[0].length;

    const directions = [
      [1, 0], // Down
      [-1, 0], // Up
      [0, 1], // Right
      [0, -1], // Left
    ];

    const visited = new Set();
    const queue = [];
    queue.push([0, 0, 0]); // [x, y, distance]

    const distances = [];

    while (queue.length) {
      const [x, y, distance] = queue.shift();

      if (x === rows - 1 && y === cols - 1) {
        distances.push(distance);
        console.log(distances);
        continue; // Reached the ending point, continue to find other paths
      }

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        if (
          isValid(newX, newY, rows, cols) &&
          matrix[newX][newY] === 0 &&
          !visited.has(`${newX}-${newY}`)
        ) {
          visited.add(`${newX}-${newY}`);
          queue.push([newX, newY, distance + 1]);
        }
      }
    }

    return distances;
  }

  const setColor = () => {
    const result = findDistances(board);
    console.log("Possible distances:", result);
  };

  return (
    <div>
      {board.map((row, i) => {
        return (
          <div key={i} className="container">
            {row.map((item, j) => {
              return (
                <div
                  key={j}
                  style={{
                    height: "20px",
                    width: "20px",
                    border: "1px solid black",
                    backgroundColor: `${
                      idx1 == i && idx2 == j ? "blue" : "white"
                    }`,
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
      <button onClick={setColor}>start</button>
    </div>
  );
};

export default PathFinder;

// class Solution {
//     public int findPath(int i,int j,int row,int col,int grid[][],int arr[][]){
//         if(i>=row || j>=col)
//             return 60000;
//         if(i==row-1 && j==col-1)
//             return grid[i][j];
//         if(arr[i][j] != 0)
//             return arr[i][j];
//         int right = grid[i][j] + findPath(i,j+1,row,col,grid,arr);
//         int down = grid[i][j] + findPath(i+1,j,row,col,grid,arr);
//         return arr[i][j] = Math.min(right,down);
//     }

//     public int minPathSum(int[][] grid) {
//         int m=grid.length;
//         int n=grid[0].length;
//         int arr[][]=new int[m][n];
//         return findPath(0,0,m,n,grid,arr);
//     }
// }
