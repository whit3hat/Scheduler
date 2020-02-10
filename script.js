//variables
let currently = $("#currentDay");
let nowHour = moment().format("H");


//setting and getting local current time to display and use for functions below
setInterval(() => {
    let now = moment();
    let date = now.format("dddd, MMMM, hh:mm a");
    currently.text(date);
}, 100);

//storing values added to event to local storage
$(".saveBtn").click(function () { 
    $('input[type="text"]').each(function () { 
        const id = $(this).attr('id'); 
        const value = $(this).val(); 
        localStorage.setItem(id, value);
    });
});

//getting items from local storage to display
$('input[type="text"]').each(function () { 
    const getting = $(this).attr('id'); 
    const letsGrab = localStorage.getItem(getting); 
    document.getElementById(getting).value = letsGrab; 
});
//color checks for hours
colorChecks(9, "#nineAm"); 
colorChecks(10, "#tenAm"); 
colorChecks(11, "#eleven"); 
colorChecks(12, "#noon"); 
colorChecks(13, "#onePm");
colorChecks(14, "#twoPm"); 
colorChecks(15, "#threePm"); 
colorChecks(16, "#fourPm"); 
colorChecks(17, "#fivePm"); 
colorChecks(18, "#sixPm");
colorChecks(19, "#sevenPM");
colorChecks(20, "#eightPm");

//function to check the time of the event and compare to current time
function colorChecks(time, theId) { 
    if (nowHour > time) { 
        $(theId).addClass("past"); 
    }
    if (nowHour < time) { 
        $(theId).addClass("future"); 
    }
    if (nowHour == time) { 
        $(theId).addClass("present");
    }

    console.log('time: ' , time , 'theID: ' , theId);
}