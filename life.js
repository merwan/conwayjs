(function() {

  var _ = self.Life = function(seed) {
    this.seed = seed;
    this.height = seed.length;
    this.width = seed[0].length;
  };

  _.prototype = {

    toString: function() {
      var rows = this.seed.map(function(row) {
        return row;
      });
      return rows.join('\n');
    }

  };

})();

var game = new Life([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
]);

console.log(game.toString());
