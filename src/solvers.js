/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution;
  var board = new Board({n:n});


  var subroutine = function(row) {
    //base - end of row
    if (row === n) {
    //increment solution and return
      solution = _.map(board.rows(), function(row){
        return row.slice();
      });
    }


    //go through solutions
    for (var i = 0; i < n; i++) {
      //insert piece
      board.togglePiece(row, i);
    if (!board.hasAnyRooksConflicts()) {
      //recuse
      subroutine(row+1);
    }
    //remove piece
    board.togglePiece(row, i);

    }
  }
  subroutine(0)


  return solution;
};











  // var solution = [];
  // //console.log(n);
  // var rookBoard = new Board({'n':n});   // Creates a new Board
  // // console.log('rookBoard', rookBoard);
  // var boardLength = rookBoard.get('n');   //boardLength stores the width of the board
  // var rowIndex = 0;
  // var colIndex = 0;
  // //Iterate through our rookRows.length
  // //for (var i = 0; i < rookRows.length; i++) {
  // //subroutine that iterates through the rows and checks the same column
  // var colCheck = function(num) { //num is boardLength
    
  //   //base case
  //   if (num === 0 || colIndex > (boardLength - 1) || rowIndex > (boardLength - 1) ) {
  //     return;
  //   }
  //   //console.log('true?', rookBoard.hasRowConflictAt(rowIndex));
  //   // Check if hasRowConflictAt(i) !== true && hasColConflictAt(i)
  //   if (!rookBoard.hasRowConflictAt(rowIndex) && !rookBoard.hasColConflictAt(colIndex)) {
  //     //console.log('test');
  //     rookBoard.togglePiece(rookBoard[rowIndex],[colIndex]);
  //   }
  //   colIndex++;
  //   rowIndex++;
  //   //increments the row forward by one index
  //   num--;
  //   colCheck(num);
  // };
  // //invoke colCheck with boardLength which decides how many times to recurse
  // colCheck(boardLength - 1);
  
  // // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // //console.log('Single solution for ' + n + ' rooks:', solution);
  // var rookRows = rookBoard.rows();    // Creates an array of rookBoards rows
  // console.log('rookRows', rookRows);
  // console.log('solution', rookBoard._currentAttributes);
  // return rookBoard._currentAttributes;
// };









// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = 0;
  var board = new Board({n:n});


  var subroutine = function(row) {
    //base - end of row
    if (row === n) {
    //increment solution and return
      solution++;
      return;
    }


    //go through solutions
    for (var i = 0; i < n; i++) {
      //insert piece
      board.togglePiece(row, i);
    if (!board.hasAnyRooksConflicts()) {
    //recuse

      subroutine(row+1);

    }
      //remove piece
    board.togglePiece(row, i);

    }
  }
  subroutine(0)


  return solution;
};
  // var solution = [],
  //   board = new Board({'n':n}),
  //   currentRow = 0,
  //   rowLength = n-1;
  //   var testCount = 0


  //   console.log(board.get(0));

  //   //for a board of 0 sqares, return 0.  For 1 square, return 1
  //   if (n === 0) {
  //     return 0;
  //   }
  //   if (n === 1) {
  //     return 1;
  //   }

  // // create a subroutine that goes through the rows (starts with row 1)
  // var subroutine = function(n) {
  //   //make base case be when n = 0
  //   if (n === 0) {
  //     return;
  //   }
  //   //loop through the current row
  //   for (var i = 0; i < rowLength; i++) {
  //     //toggle square at current position
  //     board.togglePiece(currentRow, i); // This is not currently working??
  //     //use helper functions to check if there is a conflict at each column.  If no conflict, recurisvly call subroutine.
  //     if (!board.hasAnyRooksConflicts() && n !== 1) {
  //       n--;
  //       currentRow++;
  //       subroutine(n);
  //     }
      


  //     if (!board.hasAnyRooksConflicts && n === 1) {
  //       n--;
  //       currentRow++;
  //       solution.concat(board);
  //       subroutine(n);
  //     }
  //   }
  // }
  // subroutine(n);

  // console.log('solution: ', solution);
  // //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solution.length;
// };



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = 0;
  var board = new Board({n:n});


  var subroutine = function(row) {
    //base - end of row
    if (row === n) {
    //increment solution and return
      solution++;
      return;
    }


    //go through solutions
    for (var i = 0; i < n; i++) {
      //insert piece
      board.togglePiece(row, i);
    if (!board.hasAnyQueensConflicts()) {
    //recuse

      subroutine(row+1);

    }
      //remove piece
    board.togglePiece(row, i);

    }
  }
  subroutine(0)


  return solution;
  return solution;
};
