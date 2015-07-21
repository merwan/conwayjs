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
