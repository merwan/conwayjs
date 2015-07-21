(function() {

  var _ = self.Life = function(seed) {
    this.seed = seed;
    this.height = seed.length;
    this.width = seed[0].length;
    this.board = cloneArray(seed);
  };

  _.prototype = {

    toString: function() {
      var rows = this.board.map(function(row) {
        return row;
      });
      return rows.join('\n');
    },

    tick: function() {
      var prevBoard = cloneArray(this.board);
      for (var y=0; y<this.height; y++) {
        for (var x=0; x<this.width; x++) {
          var aliveNeighbours = this.countAliveNeighbours(prevBoard, x, y);
        }
      }
    },

    countAliveNeighbours: function(board, x, y) {
      var prevRow = board[y-1] || [];
      var nextRow = board[y+1] || [];
      var neighbours = [
        prevRow[x-1], prevRow[x], prevRow[x+1],
        board[y][x-1], board[y][x+1],
        nextRow[x-1], nextRow[x], nextRow[x+1]
      ];
      return neighbours.reduce(function(prev, curr) {
        return prev + !!curr;
      }, 0);
    }

  };

  function cloneArray(array) {
    var rowsCopy = array.map(function(row) {
      return row.slice();
    });
    return rowsCopy.slice();
  }

})();

var game = new Life([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
]);

console.log(game.toString());

game.tick();

console.log(game.toString());
