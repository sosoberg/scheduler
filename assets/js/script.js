//calling moment to get todays date
var nine = document.querySelector('#nine');

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var hour = moment().format('hh:mm:ss');

console.log(hour);

var timeCheck = '';
/*
if (hour > 10) {
    nine.removeClass('present');
    nine.addClass('future');
} else if (hour < 9) {
    nine.removeClass('present');
    nine.addClass('past')
} else {
    return;
}
*/