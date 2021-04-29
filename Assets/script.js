$(document).ready(function () {
  //everything inside this function
  //displays date
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  function checkTime() {
    var cuurentHour = moment().hours();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < cuurentHour) {
        $(this).addClass("past");
      } else if (blockHour === cuurentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  checkTime();

  //listen for save button click
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val(); //
    //grab textarea by id=hour-//#
    //local storage.setitem
    //time and input in local storage
    // jquery parents ***
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
