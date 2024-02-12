$(document).ready(function () {
  var hour = $("#hour");
  var mins = $("#mins");
  var secs = $("#secs");

  $("#secs").on("input", function () {
    // Check if the entered value is greater than 60
    if (parseInt($(this).val()) > 60) {
      // If greater than 60, set the value to 60
      $(this).val(60);
    }
  });

  var interval;
  $("#start").click(function () {
    if ($(this).text() == "Start") {
      if (hour.val() <= "0" && mins.val() <= "0" && secs.val() <= "0") {
        alert("Please fill in some values");
      } else {
        if (hour.val() != "0" || mins.val() != "0" || secs.val() != "0") {
          $(this).text("Resume");
        }
        // $(this).text("Start")
        hour.prop("disabled", true);
        mins.prop("disabled", true);
        secs.prop("disabled", true);
        $(".time").text(hour.val() + ":" + mins.val() + ":" + secs.val());
        var time = $(".time").text();
        interval = setInterval(function () {
          var count = time.split(":");
          var hour = count[0];
          var min = count[1];
          var sec = count[2];
          var counter = $(".timer").find("span");
          counter.eq(0).text(hour);
          counter.eq(1).text(min);
          counter.eq(2).text(sec);
          if (hour == 0 && min == 0 && sec <= 10) {
            $(".timer").css("color", "red");
          }
          if (sec == 0) {
            if (min != 0) {
              counter.eq(1).text(min--);
              sec = 60;
            } else if (min == 0 && hour != 0) {
              counter.eq(0).text(hour--);
              counter.eq(1).text((min = 59));
              sec = 60;
            } else if (hour == 0 && min == 0 && sec == 0) {
              counter.eq(2).text(0);
            }
          }
          counter.eq(0).text(hour);
          counter.eq(1).text(min);
          counter.eq(2).text(--sec);
          time =
            counter.eq(0).text() +
            ":" +
            counter.eq(1).text() +
            ":" +
            counter.eq(2).text();
          $(".time").text(time);
          if (hour == 0 && min == 0 && sec == 0) {
            clearInterval(interval);
            alert("Time Up");
          }
        }, 1000);
      }
      
      if (hour.val() > "0" || mins.val() > "0" || secs.val() > "0") {
        $(this).text("Resume");
      }
      
    } else {
      var time = $(".time").text();
      interval = setInterval(function () {
        var count = time.split(":");
        var hour = count[0];
        var min = count[1];
        var sec = count[2];
        var counter = $(".timer").find("span");
        counter.eq(0).text(hour);
        counter.eq(1).text(min);
        counter.eq(2).text(sec);
        if (hour == 0 && min == 0 && sec == 10) {
          $(".timer").css("color", "red");
        }
        if (sec == 0) {
          if (min != 0) {
            counter.eq(1).text(min--);
            sec = 60;
          } else if (min == 0 && hour != 0) {
            counter.eq(0).text(hour--);
            counter.eq(1).text((min = 59));
            sec = 60;
          } else if (hour == 0 && min == 0 && sec == 0) {
            counter.eq(2).text(0);
          }
          
        }
        counter.eq(0).text(hour);
        counter.eq(1).text(min);
        counter.eq(2).text(--sec);
        time =
          counter.eq(0).text() +
          ":" +
          counter.eq(1).text() +
          ":" +
          counter.eq(2).text();
        $(".time").text(time);
        if (hour == 0 && min == 0 && sec == 0) {
          clearInterval(interval);
          alert("Time Up");
        }
      }, 1000);
    }
  });
  $("#stop").click(function () {
    clearInterval(interval);
  });
  $("#reset").click(function () {
    var hour = $("#hour");
    var mins = $("#mins");
    var secs = $("#secs");
    clearInterval(interval);
    $(".time").text("0:0:0");
    $("#hour").val("0");
    $("#mins").val("0");
    $("#secs").val("0");

    var counter = $(".timer").find("span");
    counter.eq(0).text("0");
    counter.eq(1).text("0");
    counter.eq(2).text("0");
    $("#start").text("Start");
    $(".timer").css("color", "white");

    hour.prop("disabled", false);
    mins.prop("disabled", false);
    secs.prop("disabled", false);
  });
});
