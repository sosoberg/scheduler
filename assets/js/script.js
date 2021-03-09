

var saveBtn = document.querySelector('.saveBtn')

var today = moment();

// moment functions to find current date and hour
$("#currentDay").text(today.format("MMM Do, YYYY"));
var hour = moment().format('HH');
console.log(hour)

// change classes for the time-blocks based on the present hour
console.log($('#toDoInput'))
$(document).ready(function() {
    $('.row').each(function() {
        if (09 == hour) {
            $('#toDoInput9').toggleClass('present');
        } else if (10 > hour) {
            $('#toDoInput9').toggleClass('future');
        } else {
            $('#toDoInput9').toggleClass('past');
        }; 

        if (10 == hour) {
            $('#toDoInput10').toggleClass('present');
        } else if (11 > hour) {
            $('#toDoInput10').toggleClass('future');
        } else {
            $('#toDoInput10').toggleClass('past');
        };

        if (11 == hour) {
            $('#toDoInput11').toggleClass('present');
        } else if (12 > hour) {
            $('#toDoInput11').toggleClass('future');
        } else {
            $('#toDoInput11').toggleClass('past');
        };

        if (12 == hour) {
            $('#toDoInput12').toggleClass('present');
        } else if (13 > hour) {
            $('#toDoInput12').toggleClass('future');
        } else {
            $('#toDoInput12').toggleClass('past');
        };

        if (13 == hour) {
            $('#toDoInput13').toggleClass('present');
        } else if (14 > hour) {
            $('#toDoInput13').toggleClass('future');
        } else {
            $('#toDoInput13').toggleClass('past');
        };

        if (14 == hour) {
            $('#toDoInput14').toggleClass('present');
        } else if (15 > hour) {
            $('#toDoInput14').toggleClass('future');
        } else {
            $('#toDoInput14').toggleClass('past');
        };

        if (15 == hour) {
            $('#toDoInput15').toggleClass('present');
        } else if (16 > hour) {
            $('#toDoInput15').toggleClass('future');
        } else {
            $('#toDoInput15').toggleClass('past');
        }; 

        if (16 == hour) {
            $('#toDoInput16').toggleClass('present');
        } else if (17 > hour) {
            $('#toDoInput16').toggleClass('future');
        } else {
            $('#toDoInput16').toggleClass('past');
        };

        if (17 == hour) {
            $('#toDoInput17').toggleClass('present');
        } else if (18 > hour) {
            $('#toDoInput17').toggleClass('future');
        } else {
            $('#toDoInput17').toggleClass('past');
        }; 
    });
    
    //var textToSave = document.querySelector('input').value;
    /*
    function save(){
        localStorage.setItem('ToDo', text_to_save);    
    };
    function retrieve () {
        var text = localStorage.getItem('ToDo');
        text_to_save.textContent = text;
    }
    */
    

});

$('.saveBtn').click(function() {
    textToSave = $('input');
    console.log(textToSave);
    localStorage.setItem('todo', JSON.stringify(textToSave));
    var text = localStorage.getItem('todo');
    var parse = JSON.parse(text);
    textToSave.textContent = parse;
});