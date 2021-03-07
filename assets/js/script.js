

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
            $('#toDoInput10').toggleClass('present');
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
    var text_to_save = document.querySelector('input').value;
    function save(){
        localStorage.setItem('ToDo', text_to_save);    
    };
    function retrieve () {
        var text = localStorage.getItem('ToDo');
        text_to_save.textContent = text;
    }
    saveBtn.addEventListener('click', function(event) {
        save();
        retrieve();
    })

});
/*
var nine = document.querySelector('#nine');
 if (hour > 09) {
    nine.classList.add('past');
    nine.classList.remove('present')
    nine.classList.remove('future')
 } else (hour < 09)
    nine.classList.add('future');
    nine.classList.remove('past');
    nine.classList.remove('present'); 

var ten = document.querySelector('#ten');
 if (hour > 10) {
    ten.classList.add('past');
    ten.classList.remove('present')
    ten.classList.remove('future')
 } else (hour < 10)
    ten.classList.add('future');
    ten.classList.remove('past');
    ten.classList.remove('present');

var twelve = document.querySelector('#eleven');
 if (hour > 11) {
    eleven.classList.add('past');
    eleven.classList.remove('present')
    twelve.classList.remove('future')
 } else (hour < 11)
    eleven.classList.add('future');
    eleven.classList.remove('past')
    twelve.classList.remove('present'); 

var twelve = document.querySelector('#twelve');
 if (hour > 12) {
    twelve.classList.add('past');
    twelve.classList.remove('present')
    twelve.classList.remove('future')
 } else (hour < 12)
    twelve.classList.add('future');
    twelve.classList.remove('past')
    twelve.classList.remove('present'); 

var thirteen = document.querySelector('#thirteen');
 if (hour > 13) {
    thirteen.classList.add('past');
    thirteen.classList.remove('present')
    thirteen.classList.remove('future')
 } else (hour < 13)
    thirteen.classList.add('future');
    thirteen.classList.remove('past')
    thirteen.classList.remove('present'); 

var fourteen = document.querySelector('#fourteen');
 if (hour > 14) {
    fourteen.classList.add('past');
    fourteen.classList.remove('present')
    fourteen.classList.remove('future')
 } else (hour < 14)
    fourteen.classList.add('future');
    fourteen.classList.remove('past')
    fourteen.classList.remove('present'); 

var fifteen = document.querySelector('#fifteen');
 if (hour > 15) {
    fifteen.classList.add('past');
    fifteen.classList.remove('present')
    fifteen.classList.remove('future')
 } else (hour < 15)
    fifteen.classList.add('future');
    fifteen.classList.remove('past')
    fifteen.classList.remove('present'); 

var sixteen = document.querySelector('#sixteen');
 if (hour > 16) {
    sixteen.classList.add('past');
    sixteen.classList.remove('present')
    sixteen.classList.remove('future')
 } else (hour < 16)
    sixteen.classList.add('future');
    sixteen.classList.remove('past')
    sixteen.classList.remove('present'); 

var seventeen = document.querySelector('#seventeen');
 if (hour > 17) {
    seventeen.classList.add('past');
    seventeen.classList.remove('present')
    seventeen.classList.remove('future')
 } else (hour < 17)
    seventeen.classList.add('future');
    seventeen.classList.remove('past')
    seventeen.classList.remove('present'); 
*/