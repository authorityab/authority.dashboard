var leap = new Leapmotion() {
   setupLeap: function() {
      var controller = new Leap.Controller({ enableGestures: true });

      controller.on("gesture", function(gesture) {
          if (gesture.type === 'swipe') {
                calculateSwipe(gesture);
          }
      });

      controller.on('deviceFrame', function(frame) {
      });

      controller.connect();
    },

    calculateSwipe: function(gesture) {
      if (gesture.state !== 'stop' || buildInProgress)
        return;

        var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
        if(isHorizontal) {
            (gesture.direction[0] > 0) ? right() : left();
        } else {
            (gesture.direction[1] > 0) ? up() : down();
        }

        inputLock();
    },

    // Inverted swipe direction
     up: function() {
      console.log('up');
    },

     down: function() {
      console.log('down');
    }
}

export leap;