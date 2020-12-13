// Get current date
var d = moment().format("dddd, MMM Do YYYY");
// Output date onto #currentDay
$("#currentDay").text(d);

$(document).ready(function () {
  // Get current number of hours
  var h = moment().hour();
  function runTimeBlocks() {
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
      else if (timeBlock == h) {
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
  // Invoke runTimeBlocks function
  runTimeBlocks();
  // Local Storage: 
  // saveBtn event listener for click
  $(".saveBtn").click(function () {
    // Get values of the parent div
    var time = $(this).parent().attr("id");
    // Get values of everything in the textarea and sibling div
    var text = $(this).siblings(".description").val();
    // Save text content in local storage after being clicked to save
    localStorage.setItem(time, text);
  })
  // Get descriptions from our Local Storage assigned to their id#
  $("#h9 .description").val(localStorage.getItem("h9"));
  $("#h10 .description").val(localStorage.getItem("h10"));
  $("#h11 .description").val(localStorage.getItem("h11"));
  $("#h12 .description").val(localStorage.getItem("h12"));
  $("#h13 .description").val(localStorage.getItem("h13"));
  $("#h14 .description").val(localStorage.getItem("h14"));
  $("#h15 .description").val(localStorage.getItem("h15"));
  $("#h16 .description").val(localStorage.getItem("h16"));
  $("#h17 .description").val(localStorage.getItem("h17"));
  $("#h18 .description").val(localStorage.getItem("h18"));
  $("#h19 .description").val(localStorage.getItem("h19"));
  $("#h20 .description").val(localStorage.getItem("h20"));
  $("#h21 .description").val(localStorage.getItem("h21"));
})
