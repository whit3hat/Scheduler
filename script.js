//variables

//variables for HTML connectors
const hour = document.getElementsByClassName('#container');
const currentDay = document.getElementById('.currentDay');

//fucntion to call and get todays date
today();

//Format option for moment date
const dateFormat = 'll';



//Function to get current day and save to local storage
function today (){
    const date = moment();
    date.format('MMM, Do, YYYY');
    localStorage.setItem('Today: ' , date);
};

//function for moment calendar
moment().calendar(referenceTime);
moment().calendar(null, {

});

//display current day 

//Poplulate screen with hour blocks for the day
 $(`.time-block`)
//change colors of hour blocks

//current hour 
$(`.present`)
//past event
$(`.past`)
//future event
$(`.future`)
//save button
$(`.saveBtn`)
//input schedule information
function event (){
    
//store event information with local storage
    localStorage.setItem('Event:' , event);
};



