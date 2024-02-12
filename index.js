$(document).ready(function(){
    function startTimer() {
        var time = $(".time").text();
        var interval = setInterval(function () {
          var count = time.split(":");
          var hour = parseInt(count[0], 10);
          var min = parseInt(count[1], 10);
          var sec = parseInt(count[2], 10);
      
          var counter = $(".timer").find("span");
          counter.eq(0).text(hour);
          counter.eq(1).text(min);
          counter.eq(2).text(sec);
      
          if (hour === 0 && min === 0 && sec === 10) {
            $(".timer").css("color", "red");
          }
      
          if (sec === 0) {
            if (min !== 0) {
              counter.eq(1).text(--min);
              sec = 60;
            } else if (min === 0 && hour !== 0) {
              counter.eq(0).text(--hour);
              counter.eq(1).text(59);
              sec = 60;
            } else if (hour === 0 && min === 0 && sec === 0) {
              counter.eq(2).text(0);
            }
          }
      
          counter.eq(0).text(hour);
          counter.eq(1).text(min);
          counter.eq(2).text(--sec);
          time = counter.eq(0).text() + ":" + counter.eq(1).text() + ":" + counter.eq(2).text();
          $(".time").text(time);
      
          if (hour === 0 && min === 0 && sec === 0) {
            clearInterval(interval);
            alert("Time Up");
          }
        }, 1000);
      
        return interval;
      }
    
      // Usage example
     $("#start").click(function () {
      var hour = $("#hours");
      var mins = $("#mins");
      var secs = $("#secs");
    
      if ($(this).text() == "Start") {
        if (hour.val() == "0" && mins.val() == "0" && secs.val() == "0") {
          alert("Please fill in some values");
        } else {
          // Disable input fields
          hour.prop('disabled', true);
          mins.prop('disabled', true);
          secs.prop('disabled', true);
    
          // Change button text to "Resume"
          $(this).text("Resume");
    
          // Start the timer and store the interval ID
          var interval = startTimer();
    
          // Save the interval ID for later use
          $(this).data('interval', interval);
        }
      } else {
        // Rest of your logic...
    
        // Change button text to "Start"
        $(this).text("Start");
    
        // Enable input fields
        hour.prop('disabled', false);
        mins.prop('disabled', false);
        secs.prop('disabled', false);
    
        // Clear the interval when pausing the timer
        clearInterval($(this).data('interval'));
      }
    });



    $("#stop").click(function () {
        clearInterval(interval);
    });
})