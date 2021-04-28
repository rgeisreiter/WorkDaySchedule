$(document).ready(function () {
  //everything inside this function
  //displays date
  $("#currentDay").text(moment().format("dddd, MMMM, Do"));

  //listen for save button click
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val(); //
    //grab textarea by id=hour-//#
    //local storage.setitem
    //time and input in local storage
    // jquery parents ***
  });
});
