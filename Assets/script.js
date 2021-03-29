// save button

var containerEl = $('.container');

// fetch today's date
var todaysDate = moment().format("dddd, MMMM Do YYYY");

// fetch current time
//var timeNow = moment().format("H");
var timeNow = 13;
// display current date
var currentDayEl = $('#currentDay');
currentDayEl.text(todaysDate);

// display respective color according to the current hour
for(var i=9; i<=17; i++){
    var timeEl = $('#'+i);
    //console.log(timeEl);
    if(timeNow == i){
        timeEl.addClass("present");
    }
    else if(timeNow > i){
        timeEl.addClass("past");
    }
    else if(timeNow<i){
        timeEl.addClass("future");
    }
}

function saveItem(event){
    var btnClickedId = $(event.target).attr('id');
    var userText = $('textarea#'+btnClickedId).val();

    // store data to local storage
    localStorage.setItem(btnClickedId, userText);

};

// display data stored in local storage
function displayItem(){
    
    for(var i=9; i<=17; i++){
        var userData = localStorage.getItem(i);
        $('textarea#'+i).val(userData);
    }
}

displayItem();

containerEl.on('click', '.saveBtn', saveItem);