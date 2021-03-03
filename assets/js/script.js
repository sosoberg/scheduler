//calling moment to get todays date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));