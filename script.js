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
    date.format('MMM D YYYY');
    localStorage.setItem('Today: ' , date);
};

//display current day 

//change colors of hour blocks

//input schedule information

//store event information with local storage


