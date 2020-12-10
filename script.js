// Get current date
var d = new Date();
// Output date onto #currentDay
$("#currentDay").text(d.toDateString());

$(document).ready(function () {

  function runTimeBlocks() {
    // Get current number of hours
    // Test for h var
    // var h = 12;
    var h = d.getHours();
    // Loop checking each time block div according to id#
    $(".time-block").each(function () {
      // The "this" refers to the .time-block class
      var timeBlock = parseInt($(this).attr("id").split("h")[1]);
      // Conditional that checks the current time time and adds classes for background colours
      // Add the past class if current time is greater than previous timeblock
      if (timeBlock < h) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      // Add the present class if current time is exactly the current timeblock
      else if (timeBlock === h) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      // Add the future class if the next timeblock is greater than current time
      else if (timeBlock > h) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  // Function to run the timeBlocks function
  runTimeBlocks();
})
