beforeEach(function () {
  jasmine.addMatchers({
      toBePlaying: function () {
        return {
          compare: function (actual, expected) {
            var player = actual;
  
            return {
              pass: player.currentlyPlayingSong === expected && player.isPlaying
            }
          }
        };
      },
    customIsActualValueGreaterAndChanged : function () {
      return {
        compare: function (actual, expected) {
          var mcxCalculator = actual;

          return {
            pass: mcxCalculator.hasChanged && mcxCalculator.value > expected
          }
        }
      };
    }
  });
});
