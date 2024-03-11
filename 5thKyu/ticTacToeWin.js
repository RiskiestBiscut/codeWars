Solution

    }
  }
  console.log('cats')
  return 0
}



// check if someone won
//  build array of win cases
//  check if either 1 or 2 matches a win case
//  if yes then check which is the winner
1
// params: array of three arrays representing a tic tac toe board
2
//return -1, 1,2, or 0 based on game status
3
​
4
function isSolved(board) {
5
  const winConditions = [
6
    [[0,0],[0,1],[0,2]],
7
    [[1,0],[1,1],[1,2]],
8
    [[2,0],[2,1],[2,2]],
9
    [[0,0],[1,0],[2,0]],
10
    [[0,1],[1,1],[2,1]],
11
    [[0,2],[1,2],[2,2]],
12
    [[0,0],[1,1],[2,2]],
13
    [[0,2],[1,1],[2,0]]
14
  ]
15
  
16
  for (let i=0; i<winConditions.length; i++) {
17
    let a = board[winConditions[i][0][0]][winConditions[i][0][1]]
18
    let b = board[winConditions[i][1][0]][winConditions[i][1][1]]
19
    let c = board[winConditions[i][2][0]][winConditions[i][2][1]]
20
    
21
    if (a === b && b === c && a!== 0) {
22
      console.log('1 or 2')
23
      return a
24
    }
25
  }
26
  
27
  for (let i=0; i<board.length; i++) {
28
    for (let j=0; j<board[i].length; j++) {
29
      console.log(board[i][j])
30
      if(board[i][j] === 0) {
31
        console.log(board[i][j])
32
        console.log('not completed')
33
        return -1
34
      }
35
    }
36
  }
37
  console.log('cats')
38
  return 0
39
}
40
​
41
​
42
​
43
// check if someone won
44
//  build array of win cases
45
//  check if either 1 or 2 matches a win case
46
//  if yes then check which is the winner
47
//  if not check if game still on or cat's game
